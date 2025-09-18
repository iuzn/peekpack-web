"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Smartphone, Eye } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-xl bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/logo.png"
              alt="PeekPack Logo"
              width={32}
              height={32}
              className="rounded-lg"
            />
            <span className="font-semibold text-xl">PeekPack</span>
          </motion.div>
          <ThemeToggle />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div
              className="flex justify-center mb-8"
              variants={fadeInUp}
            >
              <Image
                src="/images/logo.png"
                alt="PeekPack Logo"
                width={120}
                height={120}
                className="rounded-3xl"
                priority
              />
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent mb-6"
              variants={fadeInUp}
            >
              Physics-Based Casual Game
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Drop, Merge & Score Big
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Experience the addictive physics of falling balls that merge into
              larger sizes. Simple mechanics, endless fun, beautifully crafted
              for iOS.
            </motion.p>
          </motion.div>
        </section>

        {/* App Story Flow */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            className="grid gap-16 max-w-6xl mx-auto"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* First Image - Scanner */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16"
              variants={fadeInUp}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <Zap className="w-8 h-8 text-blue-500" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Drop & Merge Balls
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tap anywhere on the screen to drop colorful balls. When two
                  balls of the same size collide, they merge into a larger ball.
                  Master the physics and strategic placement.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Physics-based gameplay
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>8
                    different ball sizes
                  </span>
                </div>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src="/images/1.png"
                  alt="QR Scanner Interface"
                  width={400}
                  height={800}
                  className="rounded-3xl"
                  priority
                />
              </div>
            </motion.div>

            {/* Second Image - Generator */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
              variants={fadeInUp}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-8 h-8 text-purple-500" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Score & Progress System
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Earn points by merging balls and reach higher scores. Compete
                  with yourself and try to beat your high score. Each merge
                  creates spectacular visual effects and satisfying feedback.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Strategic scoring
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    High score tracking
                  </span>
                </div>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src="/images/2.png"
                  alt="QR Generator Interface"
                  width={400}
                  height={800}
                  className="rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Third Image - Preview & Actions */}
            <motion.div
              className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16"
              variants={fadeInUp}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <Eye className="w-8 h-8 text-green-500" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Multiple Themes & Visuals
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Choose from beautiful themes including classic colorful balls
                  or stunning bird imagery. Each theme brings a unique visual
                  experience while maintaining the same addictive gameplay.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Colors & Birds themes
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Stunning visuals
                  </span>
                </div>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src="/images/3.png"
                  alt="QR Code Preview and Actions"
                  width={400}
                  height={800}
                  className="rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Fourth Image - Smart Recognition */}
            <motion.div
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
              variants={fadeInUp}
            >
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-orange-500" />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Physics & Visual Effects
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Realistic physics simulation with gravity, collision
                  detection, and bounce effects. Spectacular particle effects
                  when balls merge, haptic feedback, and smooth 60fps gameplay
                  experience.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Realistic physics
                  </span>
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    Particle effects
                  </span>
                </div>
              </div>
              <div className="flex-1 max-w-md">
                <Image
                  src="/images/4.png"
                  alt="Smart Content Recognition"
                  width={400}
                  height={800}
                  className="rounded-3xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Privacy Section */}
        <section className="container mx-auto px-4 py-16 border-t border-border/40">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <Shield className="w-16 h-16 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Simple & Addictive Gameplay
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Clean, minimalist design focused on the core gameplay experience.
              No distractions, just pure gaming pleasure with intuitive touch
              controls and satisfying feedback.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold">Easy to Learn</h3>
                <p className="text-sm text-muted-foreground">
                  Simple tap-to-drop mechanics
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-semibold">Hard to Master</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic depth in ball placement
                </p>
              </div>
              <div className="space-y-3">
                <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold">Endless Fun</h3>
                <p className="text-sm text-muted-foreground">
                  Infinite gameplay possibilities
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Download CTA */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to play PeekPack?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of players who&apos;ve discovered the addictive
              physics of ball merging. Download now and start your journey!
            </p>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Download on App Store
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/logo.png"
                  alt="PeekPack Logo"
                  width={24}
                  height={24}
                  className="rounded"
                />
                <span className="font-semibold">PeekPack</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Physics-based puzzle game for iOS
              </p>
              <p className="text-sm text-muted-foreground">
                Built with ❤️ by Ibrahim Uzun
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Legal</h3>
              <div className="space-y-2 text-sm flex flex-col">
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold">Developer</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Ibrahim Uzun</p>
                <p>iOS Developer</p>
                <p>Istanbul, Turkey</p>
                <Link
                  href="https://x.com/ibrahimuzn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  @ibrahimuzn
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-border/40 mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 PeekPack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
