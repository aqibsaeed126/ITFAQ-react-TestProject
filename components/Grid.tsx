import * as React from 'react';

interface ISettingProps {
  dataSource: IDataSource[];
}

interface IColumnProps {
  dataPath: string;
  width?: number;
  render?: (value: Date) => JSX.IntrinsicElements;
}

interface IDataSource {
  name: string;
  age: number;
  lastLogin: Date;
}

function Grid(props) {
  let dataSource = [];
  let ColumnsList = [];
  let { children } = props;

  React.Children.forEach(children, (element) => {
    if (element.props['dataSource']) {
      dataSource = element.props['dataSource'];
    } else if (element.props['dataPath']) {
      ColumnsList.push(element);
    }
  });

  return (
    <div className="parent">
        {
          children[0]
        }      
        {
          dataSource.map((dataItem) => {
            return (
              <div className='row'> 
                {
                    ColumnsList.map((item) => {
                      if (item.props.render) {
                        let val = dataItem[item.props.dataPath];
                        return <div className="cell">{item.props.render(val)}</div>;
                      }
                      return <div className="cell">{dataItem[item.props.dataPath]}</div>;
                    })
                }
              </div>
            )
            })
        }
    </div>
  );
}

function Settings(props: ISettingProps) {
  let {dataSource} = props;
  return (
    <div className="header">
        {Object.keys(dataSource[0]).map((item) => {
          return <div className="cell">{item}</div>;
        })}
      </div>
  );
}

Grid.Settings = Settings;

function Column(props: IColumnProps) {
  return (
    <div className="cell" width={props.width}>
      {props.dataPath}
    </div>
  );
}

Grid.Column = Column;

export default Grid;
