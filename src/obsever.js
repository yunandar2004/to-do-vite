import { updateDoneTaskTotal, updateTaskTotal } from "./list.js";
import { listGroup } from "./selector.js";

const observer = () => {
  const job = () => {
    // console.log("U change in observer");
    updateDoneTaskTotal();
    updateTaskTotal();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };
  const listGroupObserver = new MutationObserver(job);
  listGroupObserver.observe(listGroup, observerOptions);
};
export default observer;
