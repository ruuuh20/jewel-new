export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] }
	}
}

export const textReveal = {
	initial: { y: "100%" },
  enter: { 
    y: 0,
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.95 }
  },
	exit: {
    y: "100%",
		transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
	}
}

export const scaleDown = {
	initial: { opacity: 0, scale: 0 },
  enter: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    scale: 0,
    opacity: 0,
		transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
	}
}