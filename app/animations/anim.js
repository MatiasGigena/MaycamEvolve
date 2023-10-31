import gsap from 'gsap';
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

export const moveSideNames = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      opacity: 0,
    },
    0
  )
    .to(
      noticiasRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      tiendaRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      contactoRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      miembrosRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      miembrosRef,
      {
        position: 'absolute',
        left: '180px',
        opacity: 1, // Esto hará que noticiasRef aparezca desde la izquierda
        duration: 1.2,
      },
      '+=0.3'
    );

  return tl;
};

export const moveSideNames2 = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      position: 'absolute',
      left: '180px',
      opacity: 1, // Esto hará que noticiasRef aparezca desde la izquierda
      duration: 1.2,
    },
    '+=0.3'
  )
    .to(
      equiposRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      noticiasRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      tiendaRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      contactoRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      miembrosRef,
      {
        opacity: 0,
      },
      0
    );

  return tl;
};

export const moveSideNames3 = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      opacity: 0,
    },
    0
  )
    .to(
      noticiasRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      noticiasRef,
      {
        position: 'absolute',
        left: '180px',
        opacity: 1, // Esto hará que noticiasRef aparezca desde la izquierda
        duration: 1.2,
      },
      '+=0.3' // Esto retrasará la segunda animación de noticiasRef en medio segundo
    )
    .to(
      tiendaRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      contactoRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      miembrosRef,
      {
        opacity: 0,
      },
      0
    );

  return tl;
};

export const moveSideNames4 = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      opacity: 0,
    },
    0
  )
    .to(
      noticiasRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      tiendaRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      tiendaRef,
      {
        position: 'absolute',
        left: '180px',
        opacity: 1, // Esto hará que noticiasRef aparezca desde la izquierda
        duration: 1.2,
      },
      '+=0.3'
    )
    .to(
      contactoRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      miembrosRef,
      {
        opacity: 0,
      },
      0
    );

  return tl;
};

export const moveSideNames5 = (
  equiposRef,
  noticiasRef,
  tiendaRef,
  contactoRef,
  miembrosRef
) => {
  const tl = gsap.timeline();
  tl.to(
    equiposRef,
    {
      opacity: 0,
    },
    0
  )
    .to(
      noticiasRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      tiendaRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      contactoRef,
      {
        opacity: 0,
      },
      0
    )
    .to(
      contactoRef,
      {
        position: 'absolute',
        left: '180px',
        opacity: 1, // Esto hará que noticiasRef aparezca desde la izquierda
        duration: 1.2,
      },
      '+=0.3'
    )
    .to(
      miembrosRef,
      {
        opacity: 0,
      },
      0
    );

  return tl;
};

export const menuVars = {
  initial: {
    opacity: 0,
    scaleY: 0.5,
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
