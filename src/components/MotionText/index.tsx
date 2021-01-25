import React from 'react';
import {
  chakra,
  ChakraProps,
  ComponentWithAs,
  forwardRef,
} from '@chakra-ui/react';
import { motion, isValidMotionProp, MotionProps } from 'framer-motion';

export type MotionTextProps = Omit<ChakraProps, keyof MotionProps> &
  MotionProps & {
    as?: React.ElementType;
  };

const MotionText = motion.custom(
  forwardRef<MotionTextProps, 'p'>((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
    );
    return <chakra.p ref={ref} {...chakraProps} />;
  }),
) as ComponentWithAs<'p', MotionTextProps>;

export default MotionText;
