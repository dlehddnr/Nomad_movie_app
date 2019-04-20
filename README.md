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