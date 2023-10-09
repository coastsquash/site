// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { Resend } from "resend";

// import SignUp from "../emails/SignUp";
import { Panel } from "../components/Panel";

// const SignUpForm = () => {
//   const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);
//
//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         sex: "",
//         age: "",
//         phone: "",
//         email: "",
//         level: "",
//         preferredTime: "",
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           resend.sendEmail({
//             from: "test@example.com",
//             to: "geoff.jay@gmail.com",
//             subject: "test",
//             react: <SignUp />,
//           });
//           setSubmitting(false);
//         }, 500);
//       }}
//       validate={(values) => {
//         const errors = {};
//
//         if (!values.name) {
//           errors.name = "Required";
//         }
//
//         return errors;
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form className="flex flex-col">
//           <Field type="text" name="name" />
//           <ErrorMessage name="name" component="div" />
//           <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

const Members = () => (
  <>
    <Panel title="Members">
      <p className="text-xl pt-2">Sign Up</p>
      {/* <SignUpForm /> */}
    </Panel>
  </>
);

export default Members;
