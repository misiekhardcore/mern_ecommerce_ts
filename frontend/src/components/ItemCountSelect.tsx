interface ItemCountSelectProps {
  count: number;
  value: number;
  setValue: any;
  current?: number;
  className?: string;
}

export const ItemCountSelect: React.FC<ItemCountSelectProps> = ({
  count = 0,
  value = 0,
  setValue,
  className,
}) => {
  const options = (count: number) => {
    let ans: any = [];
    if (count) {
      for (let i = 1; i <= count; i++) {
        ans.push(
          <option key={i} value={i}>
            {i}
          </option>
        );
      }
    }

    return ans;
  };
  return (
    <select
      disabled={!count}
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
