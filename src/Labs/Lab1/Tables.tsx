export default function Tables() {
  return (
    <div id="wd-tables">
      <h4>Table Tag</h4>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Quiz</th> {/* table heading*/}
            <th>Topic</th>
            <th>Date</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Q1</td> {/* table data / cell */}
            <td>HTML</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Q2</td> {/* table data / cell */}
            <td>CSS</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>
          <tr>
            <td>Q3</td> {/* table data / cell */}
            <td>JavaScript</td>
            <td>2/3/21</td>
            <td>85</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Average</td> {/* column span */}
            <td>85</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
