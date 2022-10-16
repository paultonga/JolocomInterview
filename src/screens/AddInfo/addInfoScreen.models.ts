import * as Yup from 'yup';

export const AddInfoScreenSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  firstName: Yup.string().min(2, 'Too Short!').required('Required'),
  lastName: Yup.string().min(3, 'Too Short!').required('Required'),
  phone: Yup.string().min(11, 'Enter valid number'),
  age: Yup.string().notRequired(),
});

export const AddInfoScreenInitialValues = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  age: '',
};

export interface AddInfoScreenProps {
  title: string;
  description: string;
  onSubmitForm: () => void;
  windowHeight: number;
}
