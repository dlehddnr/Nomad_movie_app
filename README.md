#Component

##부모 컴포넌트

```
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
```

부모컴포넌트에서 title과 poster 가 있다.

##자식 컴포넌트

```
      <div>
        <MoviePoster poster={this.props.poster} />
        <h2>{this.props.title}</h2>
      </div>
```

자식컴포넌트에서 this.props로 title을 가져와서 사용한다.
자식컴포넌트에서 this.props로 poster를 가져와서 poster에 저장한다.

##자식의 자식 컴포넌트

```
        return <img src={this.props.poster} />;
```

자식의 자식컴포넌트에서 this.props로 위의 poster를 가져와서 사용한다.

##Array.map
array.map은 array를 새로운 array로 만든다.
그런데 새로운 array로 만들때 리액트는 엘리먼트가 많을 경우 key라는 것을 줘야한다.

(movie, index) => { return ( somethingggsdagf )}
일때 movie는 현 싸이클의 현재 엘리먼트를 의미한다.
index는 우리가 현재 제공하는 리스트의 숫자 번째를 의미.

##PropTypes
static propTypes = {
title: PropTypes.number,
poster: PropTypes.string
};
부모 컴포넌트가 string이나 number같은 것을 보내면 PropTypes로 string이 아닌지 맞는지 체크
PropTypes.isRequired를 추가하면 필수조건인 prop이 없으면 에러메시지를 띄워준다.  
 [x] .isRequired 정보가 있는지 없는지
[x] .string.number ... 정보의 종류가 무엇인지.

##Component Life Cycle
componentWillMount() -> render() -> componentDidMount() 순으로 진행
willMount 에서 api 요청 -> render() -> 이런식으로 씀
###Update
componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate(로딩표시) -> render() -> componentDidUpdate()

##State
컴포넌트 안에 state가 바뀔 때 마다 render이 실행된다.
###this.setState
state를 변경할때는 직접적으로 변경하지말고 this.setState를 써준다.
###...this.state
이전 state는 그대로 두고 추가하려고 할 때 ... 해준다.

### this.state / this.props
Props are properties sent from parent components.

State are properties from inside the component.


##4-3강 loading state

```
{this.state.movies ? this._renderMoives() : "Loading"}
```

에서 this.state.movies가 처음에는 없어서 loading 되다가 2초후에 this.setState로 movies가 추가되면서
render() 가 재실행되고 다시 this.state.movies를 체크할때 존재해서 보이게된다

##5강 dumb vs smart component
모든 컴포넌트가 state가 있는것은 아니다. 어떤 컴포넌트는 stateless functional 컴포넌트 이다.

dumb : props 만 가지고있음, function render없음, 라이프사이클 없음 Only return

```
function MoviePoster({  갖게될 props 이름      }){
  return (
    <img src={poster} />;
  )
}
```

smart: willMount, function, updateState 등등 있음.

클래스들은 그 안에 this 라는 키워드가 있다.

##6-1 Ajax in React
fetch 는 console.log 해보면 Promise가 나온다.
ajax -> 페이지를 새로고침 하고 api를 불러온다.

##6-2 Promis
한번에 여러 api를 불러오고 싶을때 ajax는 하나씩 순서대로 밖에 안된다.
하지만 Promise 는 첫번째라인이 안끝나도 두번째 작업을 한다. 모든 작업은 다른작업과 관게없이 진행된다.

Promise는 시나리오 잡는 방법을 만들어준다.

then() 은 위의 작업이 끝나면 (성공여부 필요없음) 무언가를 한다.

```
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => console.log(response))
```

하면 fetch에 대한 response object가 뜬다.

```
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
    .then(response => response.json())
```

하면 우리가 확인 할 수 있는 json 으로 바뀐다.

## async, await
async, await 로 callback 지옥에 빠지는걸 예방할 수 있다.
callback hell : .then 안에 .then 안에 .then ... 이런식으로 많아지면서 길을 잃게된다.

async 는 이전 라인의 작업이 끝날때까지 기다리는 것이 아닐 때, 순서와 상관없이 작업이 진행된다.

```
    const movies = await this._callApi();
    this.setState({
      movies
    });
```
await 가 있으므로 _callApi 함수가 끝나기를 (성공여부 상관x) 기다려서 함수에서 return되는 값을 movies에 저장한다.
this.setState는 callApi 작업 후에 실행이 된다.

+ 컴포넌트의 key는 인덱스를 사용하지 않는것이 좋다. Why ? 느리거든