export const Grid = ({ row, col }) => {
  let rowArr = new Array(row).fill(1);
  let colArr = new Array(col).fill(1);

  console.log(rowArr, "j");
  return (
    <table>
      <tbody>
        {rowArr.map((row, ridx) => {
          return (
            <tr className="h-4 w-4 border solid black" key={ridx}>
              {colArr.map((col, cidx) => {
                return (
                  <td className="h-4 w-4 border solid black" key={cidx}>{` ${
                    cidx + 1
                  }`}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
