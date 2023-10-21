import gsap from 'gsap';
export const slideUp2 = {
  initial: {
    y: '0',
  },
  exit: {
    y: '-100vw',
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.2,
    },
  },
};

export const moveSideNames = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef,
  burgerRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      x: '-100vw',
      duration: 1.2,
    },
    0
  )
    .to(
      noticiasRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      tiendaRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      contactoRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      miembrosRef,
      {
        x: '-17vw',
      },
      0
    )
    .to(burgerRef, {
      opacity: 1,
    });
  return tl;
};

export const moveSideNames2 = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef,
  burgerRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      x: '-3vw',
    },
    0
  )
    .to(
      noticiasRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      tiendaRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      contactoRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      miembrosRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(burgerRef, {
      opacity: 1,
    });
  return tl;
};

export const moveSideNames3 = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef,
  burgerRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      x: '-100vw',
      duration: 1.2,
    },
    0
  )
    .to(
      noticiasRef,
      {
        x: '-33vw',
      },
      0
    )
    .to(
      tiendaRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      contactoRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      miembrosRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(burgerRef, {
      opacity: 1,
    });
  return tl;
};

export const moveSideNames4 = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef,
  burgerRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      x: '-100vw',
      duration: 1.2,
    },
    0
  )
    .to(
      noticiasRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      tiendaRef,
      {
        x: '-49vw',
      },
      0
    )
    .to(
      contactoRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      miembrosRef,
      {
        x: '100vw',
        duration: 1.2,
      },
      0
    )
    .to(burgerRef, {
      opacity: 1,
    });
  return tl;
};

export const moveSideNames5 = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef,
  burgerRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      x: '-100vw',
      duration: 1.2,
    },
    0
  )
    .to(
      noticiasRef,
      {
        x: '-100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      tiendaRef,
      {
        x: '-100vw',
        duration: 1.2,
      },
      0
    )
    .to(
      contactoRef,
      {
        x: '-63vw',
      },
      0
    )
    .to(
      miembrosRef,
      {
        x: '-100vw',
        duration: 1.2,
      },
      0
    )
    .to(burgerRef, {
      opacity: 1,
    });
  return tl;
};

export const menuVars = {
  initial: {
    scaleY: 0,
  },

  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.7,
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
