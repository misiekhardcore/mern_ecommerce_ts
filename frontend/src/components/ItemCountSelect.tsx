interface ItemCountSelectProps {
  count: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  current?: number;
  className?: string;
}

export const ItemCountSelect: React.FC<ItemCountSelectProps> = ({
  count,
  value,
  setValue,
  current,
  className,
}) => {
  const options = (count: number) => {
    let ans: any = [];
    for (let i = 0; i < count; i++) {
      ans.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return ans;
  };
  return (
    <select
      onChange={(e) => {
        setValue(parseInt(e.target.value));
      }}
      className={className || ""}
      name="count"
      id="count"
      value={value}
    >
      {options(count)}
    </select>
  );
};
