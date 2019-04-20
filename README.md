#Component

##부모 컴포넌트
```python
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
```
부모컴포넌트에서 title과 poster 가 있다.

##자식 컴포넌트
```python
      <div>
        <MoviePoster poster={this.props.poster} />
        <h2>{this.props.title}</h2>
      </div>
```
자식컴포넌트에서 this.props로 title을 가져와서 사용한다.
자식컴포넌트에서 this.props로 poster를 가져와서 poster에 저장한다.

##자식의 자식 컴포넌트
```python
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