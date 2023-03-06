export default function Checkbox({ id, label, checked, onChange }) {
    return (
      <div className="flex items-center">
        <input
          id={id}
          type="checkbox"
          className="form-checkbox h-5 w-5 text-gray-600"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id} className="ml-2 block text-gray-700">
          {label}
        </label>
      </div>
    );
  }
  