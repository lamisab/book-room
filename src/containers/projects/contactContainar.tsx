import { Form, Formik, useFormik } from "formik";
import { motion } from "framer-motion";
import { useState } from "react";
import { initialValues } from "src/core/constants";
import {
  selectionMeetingPlaces,
  selectionProgram,
} from "src/core/static/static";
import { slideIn } from "src/core/utils/motion";
import { styles } from "src/styles";
import * as Yup from "yup";

import DropListComponent from "../../components/common/dropdown";
import Input from "../../components/common/input";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async () => {
    try {
      if (initialValues) {
        setShowPopup(!showPopup);
      }
    } catch (error) {
      handleRequestError(error);
    }
    setTimeout(() => {
      alert(JSON.stringify(initialValues, null, 2));
    }, 500);
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: async () => {
      await handleSubmit();
      formik.resetForm();
    },
    validationSchema: validationSchema,
  });

  const submitForm = () => {
    // eslint-disable-next-line no-console
    console.log(initialValues);
  };

  return (
    <div className="h-screen">
      <div
        className={`xl:mt-44 flex xl:flex-row w-full justify-center items-center flex-col-reverse gap-10 mobile:gap-0`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-tertiary2 p-8 h-full rounded-2xl"
        >
          <h3 className={styles.sectionHeadText}>Book Meeting Room</h3>

          <Formik
            initialValues={initialValues}
            onSubmit={() => formik.submitForm()}
            validationSchema={formik.initialValues}
            enableReinitialize
          >
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
              className="mt-20 mobile:mt-10 flex flex-col gap-8 mobile:gap-4"
            >
              <div className="flex flex-row mobile:flex-col mobile:gap-5 gap-20">
                <label className="flex flex-col w-full">
                  <Input
                    label={"Name"}
                    name="name"
                    onChange={(e) => formik.handleChange(e)}
                    placeholder="What's your good name?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg font-medium border-2
                    ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-600"
                        : "border-violet-950"
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-sm mobile:text-sm text-red-900">
                      {formik.errors.name}
                    </p>
                  )}
                </label>
                <label className="flex flex-col w-full">
                  <Input
                    label="Email"
                    name="email"
                    onChange={(e) => formik.handleChange(e)}
                    placeholder="What's your email address?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg font-medium border-2 ${
                      formik.touched.email && formik.errors.email
                        ? "border-red-600"
                        : "border-violet-950"
                    }`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-sm mobile:text-sm text-red-900">
                      {formik.errors.email}
                    </p>
                  )}
                </label>
              </div>
              <div className="flex flex-row mobile:flex-col mobile:gap-5 gap-20">
                <label className="flex flex-col w-full">
                  <Input
                    label={"Name of company"}
                    name="name"
                    onChange={(e) => formik.handleChange(e)}
                    placeholder="What's your company name?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg font-medium border-2
                    ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-600"
                        : "border-violet-950"
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-sm mobile:text-sm text-red-900">
                      {formik.errors.name}
                    </p>
                  )}
                </label>
                <div className="flex flex-col w-full">
                  <DropListComponent
                    title={"What's your program?"}
                    currrentValue={selectionProgram[0]}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onClick={() => {}}
                    selectionList={selectionProgram}
                    label={"Program"}
                  />
                </div>
              </div>
              <div className="flex flex-row mobile:flex-col mobile:gap-5 gap-20">
                <label className="flex flex-col w-full">
                  <Input
                    label={"how many pepole in meeting ?"}
                    type="number"
                    onChange={(e) => formik.handleChange(e)}
                    placeholder="how many pepole you are ?"
                    className={`bg-tertiary py-4 px-6 placeholder:text-secondary1 rounded-lg font-medium border-2
                    ${
                      formik.touched.name && formik.errors.name
                        ? "border-red-600"
                        : "border-violet-950"
                    }`}
                  />
                  {formik.touched.number && formik.errors.number && (
                    <p className="text-sm mobile:text-sm text-red-900">
                      {formik.errors.name}
                    </p>
                  )}
                </label>
                <div className="flex flex-col w-full">
                  <DropListComponent
                    title={"Choose meeting room?"}
                    currrentValue={selectionMeetingPlaces[0]}
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
                    onClick={() => {}}
                    selectionList={selectionMeetingPlaces}
                    isSectionFloor={true}
                    label={"Meeting Room"}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => submitForm()}
                  type="submit"
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                >
                  Send
                </button>
              </div>
            </Form>
          </Formik>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function handleRequestError(error: unknown) {
  throw new Error("Function not implemented.");
}
