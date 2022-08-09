import * as React from 'react';
import './style.css';
import Grid from './components/Grid';

/**
 * Implements the Grid Component to display the source according to the template.
 * The component should be used exactly the way the code is provided.
 * No external library should be added.
 *
 * This component is a datagrid, that should display rows, with cells, following the
 * column definition.
 *
 * The component SHOULD NOT draw in a column container, but in separated rows like a table or a datagrid
 * will do.
 *
 * ------------------------------------
 * |    name    |  age  |  LastLogin  |
 * ------------------------------------
 * |   name 01  |  22   | 2022-04-08  |
 * ------------------------------------
 * |   name 02  |  19   | 2022-04-08  |
 * ------------------------------------
 * |   name 03  |  28   | 2022-04-08  |
 * ------------------------------------
 *
 * Ex :
 * <div class"row">
 *    <div class="cell">name 01</div>
 *    <div class="cell">22</div>
 *    <div class="cell">28</div>
 * </div>
 * .. next row ...
 *
 *
 */

export default function App() {
  const source = [
    { name: 'name 01', age: 22, lastLogin: new Date() },
    { name: 'name 02', age: 19, lastLogin: new Date() },
    { name: 'name 03', age: 28, lastLogin: new Date() },
  ];

  return (
    <div>
      <Grid>
        <Grid.Settings dataSource={source} />
        <Grid.Column dataPath="name" width={120} />
        <Grid.Column dataPath="age"/>
        <Grid.Column
          dataPath="lastLogin"
          render={(value: Date) => <span>{value.toLocaleDateString()}</span>}
        />
      </Grid>
    </div>
  );
}
