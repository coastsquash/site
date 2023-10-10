// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { Resend } from "resend";

// import SignUp from "../emails/SignUp";
import { EmailLink } from "../components";
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
  <Panel title="Members">
    <Panel.Section title="Member request">
      <p>
        To view a list of players on the sunshine coast email
        <EmailLink className="mx-1" email="coastsquash@gmail.com" inline>
          coastsquash@gmail.com
        </EmailLink>
        requesting the list.
      </p>
    </Panel.Section>
    <Panel.Section title="Sign up" className="mt-4">
      {/* <SignUpForm /> */}
      <p>
        To be added to the list send an email to
        <EmailLink className="mx-1" email="coastsquash@gmail.com" inline>
          coastsquash@gmail.com
        </EmailLink>
        with the following information.
        Please supply the following information if you wish to be on the Coast Squash List:
      </p>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="w-[196px]">Name:</div>
          <div className="w-[512px] border-b-2 border-slate-500">&nbsp;</div>
        </div>
        <div className="flex flex-row">
          <div className="w-[196px]">Age:</div>
          <div className="w-[512px] border-b-2 border-slate-500">&nbsp;</div>
        </div>
        <div className="flex flex-row">
          <div className="w-[196px]">Phone:</div>
          <div className="w-[512px] border-b-2 border-slate-500">&nbsp;</div>
        </div>
        <div className="flex flex-row">
          <div className="w-[196px]">Email:</div>
          <div className="w-[512px] border-b-2 border-slate-500">&nbsp;</div>
        </div>
        <div className="flex flex-row">
          <div className="w-[196px]">Level:</div>
          <div className="w-[512px] border-b-2 border-slate-500 text-slate-500 italic">(Beginner / Intermediate / Advanced)</div>
        </div>
        <div className="flex flex-row">
          <div className="w-[196px]">Prefered playing time(s):</div>
          <div className="w-[512px] border-b-2 border-slate-500">&nbsp;</div>
        </div>
      </div>
    </Panel.Section>
    <Panel.Section title="Test" className="mt-4">
      <form action="http://coastsquash-mailer.internal:8080/">
        <button className="border-none" type="submit">Test</button>
      </form>
    </Panel.Section>
  </Panel>
);

export default Members;
