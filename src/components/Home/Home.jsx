import { getGames, getGenres } from "../../redux/actions";
import Nav from "../Nav/Nav";
import Pagination from "../Pagination/Pagination";
import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Home.module.css";


export class Home extends Component {
    componentDidMount() {
      this.props.getGames()
      this.props.getGenres()
    }
    constructor(props) {
      super(props);
      this.state = {
        filtered: [],
        genre: "",
        origin: "",
        order: "",
        type: "",
        search: "",
        page: 1
      }
    }
    changeHandler = e => {
      if (e.target.name === "reset") {
        this.setState({
          genre: "",
          origin: "",
          order: "",
          type: "Ascending",
          page: 1
        }, () => {
          this.applyFilter();
        });
      } else {
        this.setState({ [e.target.name]: e.target.value }, () => {
          this.applyFilter();
        });
      }
      if (e.target.name !== "search") this.changePage(1); //cambio en input search, no quiero que cambie la pg. Sí en boton.
                                                         
    }
    applyFilter() {
      let aux = [...this.props.games];
      if (this.state.genre) aux = aux.filter(ga => ga.genres.some(ge => ge.name === this.state.genre));
      if (this.state.origin === "Api") aux = aux.filter(ga => !isNaN(ga.id));
      if (this.state.origin === "Created") aux = aux.filter(ga => isNaN(ga.id));
      if (this.state.order === "Alphabet") aux = aux.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      if (this.state.order === "Rating") aux = aux.sort(function (a, b) {
        if (a.rating > b.rating) return 1;
        if (a.rating < b.rating) return -1;
        return 0;
      });
      if (this.state.type === "Descending") aux = aux.reverse();
      this.setState({ filtered: aux });
    }
    
    changePage = index => {
      this.setState({ page: index });
    }

    searchHandler = () => {
      this.props.getGames(this.state.search);
      this.changePage(1);
    }

    render() {
      return (
        <>
          <Nav />
          <div className={style.background}>
          <div className={style.wrapper}>
          <div className={style.search}>
              <input className={style.filtneu} name="search" value={this.state.search} onChange={(e) => this.changeHandler(e)} type="text" placeholder='Search Game...' />
              <button className={style.neu} type="submit" onClick={this.searchHandler}>Search</button>
            </div>

            <div className={style.filter}>
              <select className={style.filtneu2} name="genre" value={this.state.genre} onChange={(e) => this.changeHandler(e)}>
                <option value="">All Genres</option>
                {this.props.genres.map((g) => {
                  return (
                    <option value={g.name} key={g.id}>
                      {g.name}
                    </option>
                  );
                })}
              </select>
              <select className={style.filtneu2} name="origin" value={this.state.origin} onChange={(e) => this.changeHandler(e)}>
                <option  value="">Any Origin</option>
                <option  value="Api">Api</option>
                <option  value="Created">Created</option>
              </select>
              <select className={style.filtneu2} name="order" value={this.state.order} onChange={(e) => this.changeHandler(e)}>
                <option value="">Order By</option>
                <option value='Alphabet'>Alphabet</option>
                <option value='Rating'>Rating</option>
              </select>
              <select className={style.filtneu2} name="type" value={this.state.type} onChange={(e) => this.changeHandler(e)}>
                <option value='Ascending'>Ascending</option>
                <option value='Descending'>Descending</option>
              </select>
              <button className={style.neu} name="reset" onClick={(e) => this.changeHandler(e)}>Reset Filter</button>
            </div>
            
            <Pagination className={style.pagination} games={this.state.genre || this.state.origin || this.state.order || this.state.type ? this.state.filtered : this.props.games} changePage={this.changePage} page={this.state.page} />
          </div>
          </div>
        </>
      );
    }
  }
  
  export const mapStateToProps = (state) => {
    return {
      games: state.games,
      genres: state.genres
    }
  }
  
  export const mapDispatchToProps = { getGames, getGenres }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);