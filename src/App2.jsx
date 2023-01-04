import React from "react";

//클래스 타입의 컴포넌트
//클래스 컴포넌트는 Rect.Component를 상속받아 사용함
class App2 extends React.Component{
    //state : 현재 컴포넌트에서 사용하는 상태 값
    //props는 부모 컴포넌트에서 전달되는 값이지만 state는 현재 컴포넌트에서만 사용되는 값으로 수정 가능
    //state의 값이 변경되면 리액트는 화면을 다시 재렌더링을 함
    //state의 값을 직접적으로 변경하는 것은 불가능, setState()함수를 사용하여 값을 수정
    state={
        count: 0,
    };

    plus=() => {
        this.setState({count: this.state.count + 1})
        console.log('plus');
    }

    minus= ()=>{
        console.log('minus');
        this.setState({count: this.state.count -1});
    }

    //render():클래스 컴포넌트에서 화면을 랜더링하기 위한 메소드
    //render 은 함수 컴포넌트와 사용 방법이 동일함
    render(){
        return (
            <div>
                <h1>클래스 컴포넌트 App2</h1>
                <h3>카운트 수:{this.state.count}</h3>
                <button onClick={this.plus}>plus</button>
                <button onClick={this.minus}>minus</button>
            </div>
        );
    }
    constructor(props) {
        super(props);
        console.log("생성자 실행");
    }
    
    //componentDidMount, componentDidUpdate,componentWillUnmount 는 리액트의 생명주기에 관련되어 있는 이벤트 함수
    //componentDidMount():해당 컴포넌트가 DOM에 추가된 후 동작하는 이벤트
    //componentDidUpdate():해당 컴포넌트의 데이터가 변경된 후 동작하는 이벤트
    //componentWillUnmount():해당 컴포넌트가 더이상 사용되지 않아 삭제 된 후 동작하는 이벤트
    
    //클래스 컴포넌트에서만 사용할 수 있음
    //함수 컴포넌트에서는 해당 이벤트 함수들을 사용할 수 없음
    //함수 컴포넌트에서 해당 이벤트 함수들을 사용하기 위해서 hooks 라는 기능을 추가하여 해당 이벤트를 구현함
    componentDidMount() {
        console.log("컴포넌트 생성 완료")
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("컴포넌트 업데이트");
    }
    
    componentWillUnmount() {
        console.log();
    }
}

export default App2;












