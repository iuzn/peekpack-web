# PeekPack - Game Features

Bu dokümantasyon, PeekPack oyununa eklenen yeni özellikleri açıklamaktadır.

## 🎨 Ana Menü Sistemi

### Özellikler:

- **Modern UI Tasarımı**: Siyah arka plan üzerinde beyaz metin ile minimal tasarım
- **PEEKPACK Branding**: Büyük, kalın font ile merkezi başlık
- **High Score Gösterimi**: 👑 emoji ile öne çıkan en yüksek skor
- **Tema Seçim Kartları**: Her tema için ayrı card tasarımı

### Ana Menü Bileşenleri:

1. **Başlık Alanı**

   - PEEKPACK logosu (48pt, bold, rounded font)
   - High score badge (varsa)
   - "Select Your Pack" alt başlığı

2. **Tema Kartları**

   - Sol tarafta tema adı ve açıklaması
   - Sağ tarafta preview görselleri veya renkler
   - Seçili tema için mavi gradient arka plan
   - Hover/selection animasyonları

3. **Play Butonu**
   - Mavi gradient arka plan
   - Beyaz çerçeve ile vurgu
   - Animasyonlu press efekti

## 🎭 Tema Sistemi

### Mevcut Temalar:

#### 1. Colors Teması

- **Açıklama**: "Classic colorful circles"
- **Görsel**: Renkli daireler (kırmızı, turuncu, sarı preview)
- **Oyunda**: Orijinal renkli toplar kullanılır

#### 2. Birds of Paradise Teması

- **Açıklama**: "Beautiful bird imagery"
- **Görsel**: Kuş fotoğrafları (1.jpg, 2.jpg, 3.jpg preview)
- **Oyunda**: 8 farklı kuş görseli (1.jpg - 8.jpg) yuvarlak toplar olarak

### Tema Sistemi Özellikleri:

- **Otomatik Görsel Yükleme**: Tema seçimine göre ball görselleri otomatik değişir
- **Yuvarlak Maskeleme**: Kuş görselleri circle mask ile kesilir
- **Fallback Sistem**: Görsel yüklenemezse renk kullanılır
- **Efekt Uyumluluğu**: Sparkle efektleri tema renklerine uyumlu

## 🎮 Oyun İçi UI İyileştirmeleri

### High Score Overlay

- **Konum**: Sol üst köşe
- **Tasarım**: Yarı yuvarlak badge (sol düz, sağ yuvarlak)
- **Görünüm**: 👑 emoji + skor sayısı
- **Safe Area Uyumlu**: iPhone notch/island uyumlu

### Menu Butonu

- **Konum**: Sağ üst köşe
- **İkon**: 3 yatay çizgi (hamburger menu)
- **Stil**: 32pt, bold, siyah renk
- **İnteraktif**: Tam saydam arka plan

### Oyun İçi Menü Modal

- **Tasarım**: Merkezi modal kutu
- **Arka Plan**: %75 siyah overlay
- **İçerik**:
  - "MENU" başlığı
  - "MAIN MENU" butonu (kırmızı, ana menüye döner)
  - "RESUME" butonu (yeşil, oyuna devam)
- **Animasyonlar**: Scale ve opacity efektleri
- **İnteraksiyon**: Dışına dokunarak kapatma

### Game Over Modal İyileştirmeleri

- **Gelişmiş Tasarım**: Daha büyük ve etkileyici
- **İki Buton Sistemi**:
  - "MENU" butonu: Ana menüye dön
  - "RESTART" butonu: Oyunu yeniden başlat
- **Animasyonlar**: Spring animasyonları
- **Skor Gösterimi**: Büyük, etkileyici font

## 🔧 Teknik Özellikler

### State Management

- **GameStateManager**: High score kayıt/yükleme sistemi
- **ThemeManager**: Tema seçimi ve state yönetimi
- **UserDefaults İntegrasyonu**: High score kalıcı saklama

### Navigation

- **SwiftUI NavigationView**: Modern navigation sistemi
- **State-Based UI**: Conditional view rendering
- **Memory Management**: Proper cleanup ve lifecycle yönetimi

### Performance Optimizations

- **Mevcut Oyun Mantığını Koruma**: Sadece UI değişiklikleri
- **Tema Lazy Loading**: Görseller ihtiyaç anında yüklenir
- **Efficient Rendering**: SpriteKit optimizasyonları korundu

## 📱 Platform Uyumluluğu

### iOS Uyumluluğu

- **Safe Area Support**: iPhone X ve sonrası uyumlu
- **Dynamic Type**: Sistem font boyutlarına uyum
- **Accessibility**: VoiceOver desteği hazır

### Cihaz Desteği

- **Screen Sizes**: Tüm iPhone boyutları desteklenir
- **Orientation**: Portrait mode optimizasyonu
- **Performance**: 60fps target korundu

## 🎯 Gelecek Özellikler

### Potansiyel İyileştirmeler:

1. **Daha Fazla Tema**: Yeni görsel paketleri
2. **Tema Unlock Sistemi**: Skor bazlı tema açma
3. **Custom Themes**: Kullanıcı fotoğrafları
4. **Achievement System**: Başarım sistemi
5. **Leaderboard**: Online skor tablosu

## 📋 Teknik Notlar

### Dosya Organizasyonu:

- `ContentView.swift`: Ana uygulama ve tüm UI bileşenleri
- `GameScene.swift`: Oyun motoru + tema desteği
- `Assets.xcassets/`: Tema görselleri (1.jpg - 8.jpg)

### Kod Kalitesi:

- **SOLID Principles**: Clean architecture prensipler
- **SwiftUI Best Practices**: Modern SwiftUI patterns
- **Performance First**: Mevcut performans korundu
- **Type Safety**: Strong typing kullanımı

---

**Not**: Bu özellikler mevcut oyun deneyimini bozmayacak şekilde, sadece görsel ve kullanıcı deneyimi iyileştirmeleri olarak eklenmiştir. Temel oyun mekaniği, fizik sistemi ve performans korunmuştur.
