# PeekPack - Oyun Genel Yapısı

## Temel Konsept

PeekPack, yukarıdan düşen topların birleşmesiyle oynanan basit bir fizik oyunudur. Aynı boyuttaki toplar çarpıştığında birleşir ve daha büyük boyuta dönüşür.

## Oyun Mekaniği

### Top Sistemi

- **8 farklı boyut**: 30, 42, 58, 82, 115, 161, 225, 315 piksel çapında
- **Renk paleti**: systemRed, systemOrange, systemYellow, systemGreen, systemBlue, systemIndigo, systemPurple, systemPink
- **Tek top kuralı**: Aynı anda sadece bir top aktif olur

### Kontroller

- **Dokunma kontrolü**: Ekranda dokunulan X koordinatına top düşer
- **Sınır koruması**: Top ekran dışına taşmaz, kenar sınırları içinde kalır
- **Güvenli alan**: Üstteki top güvenli alan altında konumlanır

### Birleşme Kuralları

- **Aynı boyut**: İki aynı boyuttaki top çarpıştığında anında birleşir
- **Farklı boyut**: Farklı boyuttaki toplar sadece çarpar, birleşmez
- **Maksimum boyut**: 8. boyut en büyük boyuttur

### Puan Sistemi

- **Puan hesaplama**: (boyut + 1) \* 10 formülü
- **Görünüm**: Sol üst köşede siyah renkte
- **Animasyon**: Puan artışında büyüyüp-küçülme efekti

## Teknik Yapı

### Ana Dosyalar

- **GameScene.swift**: Ana oyun sahne sınıfı (SpriteKit)
- **ContentView.swift**: SwiftUI wrapper ve sahne oluşturma
- **PeekPackApp.swift**: Uygulama giriş noktası

### Fizik Sistemi

- **Gravity**: -18.0 (hızlı ama kontrollü yerçekimi)
- **Restitution**: 0.2 (orta sekme)
- **Friction**: 0.05-0.9 (düşük sürtünme - toplar kayar)
- **Collision Categories**: ballCategory, groundCategory, wallCategory

### Timer Sistemi

- **Çarpışma sonrası bekleme**: 1.0 saniye
- **Foundation Timer**: Timer.scheduledTimer kullanımı
- **Tetikleme**: Top-top çarpışması veya top-zemin çarpışması

### Görsel Tasarım

- **Arka plan**: Tamamen beyaz
- **Zemin**: Kahverengi şerit (40px yükseklik) + üstünde yeşil çizgi (4px)
- **Toplar**: Dolu renkli daireler, stroke ile çerçeve
- **Efektler**: 16 parçacıklı gelişmiş sparkle efekti (birleşmede)

## Oyun Akışı

### Başlangıç

1. Sahne kurulumu (fizik, sınırlar, zemin, puan)
2. İlk iki top önceden belirlenir (zorunlu sıra: 1, 1, 2)
3. İlk top görünür, ikinci top hazırda bekler
4. Oyuncu dokunma bekler

### Oyun Döngüsü

1. **Dokunma**: Mevcut top belirlenen X koordinatına düşer
2. **Çarpışma**: Top başka topa veya zemine çarpar
3. **Birleşme**: Aynı boyuttaysa birleşir, puan kazanılır
4. **Bekleme**: 1.0 saniye timer
5. **Yeni top**: Önceden belirlenen top görünür, yeni sonraki top hesaplanır

### Efektler ve Geri Bildirim

- **Sparkle**: Birleşme anında 16 parçacık saçılır (gelişmiş efekt)
- **Haptic**: Boyut bazında titreşim (light/medium/heavy)
- **Puan animasyonu**: Label büyüyüp küçülür

## Sonraki Top Seçimi Algoritması

### Amaç

Oyunun erken safhasında alanı verimli kullanmak ve oyuncuya hızlı ilerleme hissi vermek için küçük topları ağırlıklı göstermek; daha büyük topları ise hem kilit kurallarına bağlamak hem de nadir göstermek.

### Önceden Belirleme Sistemi

- **Stabil önizleme**: Sonraki top önceden belirlenir ve değişmez
- **İki adım önden**: Mevcut top + sonraki top her zaman hazır
- **Sadece kullanımda güncelleme**: Yeni sonraki top sadece mevcut top kullanıldığında belirlenir

### Zorunlu Başlangıç Dizisi

- İlk üç top sırası her zaman 1, 1, 2 şeklindedir (indeks: 0, 0, 1)
- Bu sayede oyuncu hızlıca 3. boyutu (iki 2'nin birleşmesiyle) görebilir
- Zorunlu sıra tamamlandıktan sonra ağırlıklı seçime geçilir

### Her Zaman Havuzda Olanlar

- 1., 2. ve 3. toplar (indeks: 0, 1, 2) her zaman seçim havuzunda bulunur
- Bu toplar hiçbir kilit kuralına bağlı değildir

### Kilit Kuralları (Gating)

- **4. top kilidi**: 4. top (indeks 3) ancak 5. top (indeks 4) oyunda en az bir kez **birleşme ile oluşturulduktan** sonra seçim havuzuna eklenebilir
- **5. top kilidi**: 5. top (indeks 4) ancak 6. top (indeks 5) oyunda en az bir kez **birleşme ile oluşturulduktan** sonra seçim havuzuna eklenebilir
- **6. ve 7. toplar**: ASLA sonraki top olarak gösterilmez, sadece birleşme ile elde edilebilir

**Önemli**: Kilit açılması sadece birleşme ile oluşan toplar için geçerlidir. Önizlemede gösterilen toplar kilit durumunu etkilemez.

### Ağırlıklı Seçim (Nadirlik)

Kilidi açık olan tipler arasından ağırlıklı rastgele seçim yapılır:

- **1. top**: 50 (yüksek olasılık)
- **2. top**: 35 (orta olasılık)
- **3. top**: 15 (düşük olasılık)
- **4. top**: 3 (çok nadir - kilit açıldıysa)
- **5. top**: 1 (ultra nadir - kilit açıldıysa)

### Algoritma Akışı

1. **Başlangıç**: Zorunlu sıra [0, 0, 1] kullanılır
2. **Normal oyun**: Ağırlıklı seçim havuzundan rastgele seçim
3. **Kilit kontrolü**: Sadece birleşme ile oluşan tipler kilitleri açar
4. **Önizleme stabil**: Belirlenen sonraki top değişmez
5. **Güncelleme**: Sadece top kullanıldığında yeni sonraki top hesaplanır

### Örnek Senaryo

1. Oyun başlar: 1 (mevcut) → 1 (sonraki)
2. İlk top atılır: 1 (mevcut) → 2 (sonraki)
3. İkinci top atılır: 2 (mevcut) → 1,2,3'ten seçilen (sonraki)
4. İki 2 birleşir → 3 oluşur: Kilit durumu değişmez (çünkü 3 zaten açık)
5. İki 3 birleşir → 4 oluşur: Kilit durumu değişmez (çünkü 5 henüz yok)
6. 3+4 birleşir → 5 oluşur: 4'ün kilidi açılır (çünkü 5 oluştu)
7. Bundan sonra sonraki toplar: 1,2,3,4'ten seçilebilir (4 çok nadir)

## Performans Notları

### Mevcut Durum

- **CPU kullanımı**: ~23% idle durumda (optimize edilmeli)
- **Memory**: ~112 MB
- **FPS**: 60 FPS sabit
- **Energy Impact**: High (optimize edilmeli)

### Bilinen Sorunlar

- Foundation Timer kullanımı CPU yoğun
- Sürekli node oluşturma/silme memory pressure yaratır
- Fizik simülasyonu idle durumda da çalışır

## Geliştirme Notları

### Kod Yapısı

- **Tek sahne**: GameScene sınıfı tüm oyun mantığını içerir
- **SwiftUI entegrasyonu**: ContentView minimal wrapper
- **Fizik delegesi**: SKPhysicsContactDelegate ile çarpışma yönetimi

### Gelecek İyileştirmeler

- Node pooling sistemi (memory optimization)
- SpriteKit native timer kullanımı
- Adaptive frame rate (idle/active)
- Fizik simülasyonu ON/OFF sistemi

## Yapay Zeka Ajanları İçin Notlar

### Mevcut Implementasyon

- Foundation Timer ile 1.0s bekleme
- Her top için yeni SKShapeNode oluşturma
- Sürekli fizik simülasyonu
- 60 FPS sabit frame rate
- Önceden belirleme sistemi ile stabil sonraki top önizlemesi

### Kritik Kurallar

- **Sonraki top değişmez**: Bir kez belirlenen sonraki top, kullanılana kadar sabit kalır
- **Kilit sadece birleşme ile**: Önizleme kilitleri etkilemez, sadece gerçek birleşmeler
- **Zorunlu başlangıç**: İlk üç top her zaman 1-1-2 sırası
- **6-7 asla önizleme**: Büyük toplar sadece birleşme ile elde edilir

Bu dokümantasyon mevcut oyunun gerçek durumunu yansıtır ve gelecekteki geliştirmeler için referans sağlar.
