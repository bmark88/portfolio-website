import React from 'react';

class ToggleItem extends React.Component<any> {
  constructor(props: any) {
    super(props)
  }

  handleClick = (e: any) => {
    this.setState({...this.state, currentItem: e.target.innerHTML })
  };

  render() {
    return (
      <>
        { this.props.type === 'projects' ? 
          this.props.items.map((item: string, index: number) => 
            <li key={index} onClick={(e) => this.props.setProjects({id: 2, projectView: e.target.innerHTML})}>
              {item}
            </li>
          )
          :
          this.props.items.map((item: string, index: number) => 
            <li key={index} onClick={(e) => this.props.setAboutSection({currentAboutSection: e.target.innerHTML})}>
              {item}
            </li>
          )
        }
      </>
    );
  }
}

export default ToggleItem;