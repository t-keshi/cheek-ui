export const easingMap = {
  ease: 'ease',
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

const durationMap = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195,
} as const;

const formatMs = (milliseconds: number) => `${Math.round(milliseconds)}ms`;

type TransitionOptions = Partial<{
  easing: keyof typeof easingMap;
  duration: keyof typeof durationMap;
  delay: number;
}>;

export const createTransition = (properties: string[], transitionOptions: TransitionOptions) => {
  const { duration, easing, delay } = transitionOptions;
  const formattedOptions = {
    duration: duration ? durationMap[duration] : undefined,
    easing: easing ? easingMap[easing] : undefined,
    delay: delay ? formatMs(delay) : undefined,
  };
  const computedTransition = Object.values(formattedOptions).reduce(
    (prev: string, current: number | string | undefined) => {
      if (current === undefined) {
        return prev;
      }

      return `${prev} ${current}`;
    },
    '',
  );

  return properties.map((property) => `${property} ${computedTransition}`).join(',');
};
