import React, { ForwardedRef } from 'react';
import {
  TextInput,
  View,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from 'react-native';
import { FormInputProps } from './formInput.models';
import styles from './formInput.styles';

function Component(
  { onFocus, onBlur, error, style, ...props }: FormInputProps,
  ref: ForwardedRef<TextInput | null>,
) {
  const [focused, setFocused] = React.useState(false);

  const hasError = React.useMemo(() => !!error, [error]);

  const handleOnFocus = React.useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(true);
      onFocus && onFocus(e);
    },
    [onFocus],
  );

  const handleOnBlur = React.useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      setFocused(false);
      onBlur && onBlur(e);
    },
    [onBlur],
  );

  return (
    <View style={styles.formInputWrapper}>
      <TextInput
        ref={ref}
        style={[
          style,
          focused && styles.formInputFocused,
          hasError && styles.formInputError,
        ]}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...props}
      />
    </View>
  );
}

export const FormInput = React.forwardRef(Component);
