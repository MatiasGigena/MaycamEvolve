export const slideUp2 = {
  initial: {
    y: '0',
  },
  exit: {
    y: '-100vw',
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};

export const menuVars = {
  initial: {
    opacity: 0,
    scaleY: 0.99,
  },

  animate: {
    opacity: 1,
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 0, 0.36, 1],
    },
  },
};

export const containerVars = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export const mobileLinkVars = {
  initial: {
    y: '-30vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.5,
    },
  },
};
export const mobileLinkMenu = {
  initial: {
    y: '-50vh',
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.5,
    },
  },
};
