interface InputProps {
  id: string;
  onChange: (e: any) => void;
  value: string;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  onChange,
  value,
  label,
  type
}) => {
  return (
    <div className="relative w-full">
      <input className="
        w-full block rounded-sm px-6 pt-6 pb-1 text-md text-white bg-neutral-700
        appearance-none focus:outline-none focus:ring-0 peer focus:bg-neutral-500/80
        "
        id={id}
        type={type ? type : "text"}
        value={value}
        placeholder=""
        onChange={onChange}
      />

      <label className="
        absolute text-md text-zinc-400 duration-100 transform -translate-y-3
        scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0 peer-focus:scale-75
        peer-focus:-translate-y-3
        "
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
