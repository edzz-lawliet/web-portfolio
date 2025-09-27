/**
 * Animation variants for Framer Motion components
 * Provides reusable animation configurations for consistent motion design
 */

export const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.5, ease: "easeOut" }
};

export const slideInFromBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
  transition: { duration: 0.7, ease: "easeOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" }
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 }
};

export const modalVariants = {
  initial: { 
    opacity: 0, 
    scale: 0.8,
    y: 50
  },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

export const backdropVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

export const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    y: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    scale: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};