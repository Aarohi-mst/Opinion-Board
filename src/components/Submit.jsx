import { useFormStatus } from "react-dom";
const Submit = () => {
  const { pending } = useFormStatus(); //works to disable the submit button once the data is sending for the storage
  return (
    <div>
      <p className="actions">
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </p>
    </div>
  );
};

export default Submit;
