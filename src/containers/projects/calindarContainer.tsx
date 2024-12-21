/* eslint-disable @typescript-eslint/no-unused-vars */
import { motion } from "framer-motion";
import { ReactNode, SetStateAction, useState } from "react";
import CalendarComponent from "src/components/Calendar";
import TaskBarComponent from "src/components/taskBar";
import { slideIn } from "src/core/utils/motion";
import { styles } from "src/styles";
const CalendarContainer = () => {
  const [Ground, setGround] = useState<boolean>(true);

  const handleToggle = () => {
    setGround(!Ground);
  };

  return (
    <div className="h-screen">
      <div
        className={`xl:mt-32 mobile:mt-32 flex xl:flex-row w-full justify-center items-center flex-col-reverse gap-10 mobile:gap-0`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-tertiary2 space-y-7 p-10 mobile:p-0 mobile:px-0 mobile:py-10 h-full w-full rounded-2xl"
        >
          <h3 className={styles.sectionSubText}>Meeting room Calendar</h3>
          <section className="relative py-8 sm:p-8 p-2 bg-white rounded-md">
            <TaskBarComponent
              Ground={Ground}
              handleToggle={() => handleToggle()}
            />
            <CalendarComponent isGround={Ground}/>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default CalendarContainer;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function handleRequestError(error: unknown) {
  throw new Error("Function not implemented."); //-
}
