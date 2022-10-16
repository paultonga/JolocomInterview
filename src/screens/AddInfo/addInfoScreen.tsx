import React from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Header from '../../components/Header/header';
import SquareButton from '../../components/SquareButton/squareButton';
import {
  AddInfoScreenInitialValues,
  AddInfoScreenProps,
  AddInfoScreenSchema,
} from './addInfoScreen.models';
import { FormInput } from '../../components/FormInput/formInput';
import styles from './addInfoScreen.styles';

const AddInfoScreen: React.FC<AddInfoScreenProps> = ({
  title,
  description,
  onSubmitForm,
  windowHeight,
}) => {
  const scrollTranslateY = useSharedValue(0);

  const lastNameInputRef = React.useRef<TextInput>(null);
  const emailInputRef = React.useRef<TextInput>(null);
  const phoneInputRef = React.useRef<TextInput>(null);
  const ageInputRef = React.useRef<TextInput>(null);

  const {
    handleChange,
    handleSubmit,
    errors,
    handleBlur,
    values,
    isValid,
    resetForm,
  } = useFormik({
    initialValues: AddInfoScreenInitialValues,
    validationSchema: AddInfoScreenSchema,
    validateOnMount: false,
    onSubmit: () => {
      onSubmitForm();
      resetForm();
    },
  });

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollTranslateY.value = event.contentOffset.y - 50;
  });

  return (
    <View style={[styles.page, { height: windowHeight }]}>
      <Header title={title} sharedValue={scrollTranslateY} />
      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        contentInsetAdjustmentBehavior="always"
        contentContainerStyle={styles.scrollViewContent}
        automaticallyAdjustKeyboardInsets>
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeaderText}>{title}</Text>
          <Text style={styles.pageDescriptionText}>{description}</Text>
        </View>

        <View style={styles.formContainer}>
          <FormInput
            keyboardType="default"
            returnKeyType="done"
            style={styles.formInput}
            placeholder="First name"
            onSubmitEditing={() => lastNameInputRef?.current?.focus()}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
            error={errors.firstName}
          />

          <FormInput
            ref={lastNameInputRef}
            keyboardType="default"
            returnKeyType="done"
            style={styles.formInput}
            placeholder="Last name"
            onSubmitEditing={() => phoneInputRef?.current?.focus()}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
            error={errors.lastName}
          />

          <FormInput
            ref={phoneInputRef}
            keyboardType="phone-pad"
            returnKeyType="done"
            style={styles.formInput}
            placeholder="Phone number"
            onSubmitEditing={() => emailInputRef?.current?.focus()}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            error={errors.phone}
          />

          <FormInput
            ref={emailInputRef}
            keyboardType="email-address"
            returnKeyType="done"
            style={styles.formInput}
            placeholder="Email"
            onSubmitEditing={() => ageInputRef?.current?.focus()}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            autoCapitalize="none"
            value={values.email}
            error={errors.email}
          />

          <FormInput
            ref={ageInputRef}
            keyboardType="numeric"
            returnKeyType="done"
            style={styles.formInput}
            placeholder="Age"
            onSubmitEditing={() => Keyboard.dismiss()}
            onChangeText={handleChange('age')}
            onBlur={handleBlur('age')}
            value={values.age}
            error={errors.age}
          />

          <SquareButton
            onPress={handleSubmit}
            label="Submit"
            disabled={!isValid}
          />
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default AddInfoScreen;