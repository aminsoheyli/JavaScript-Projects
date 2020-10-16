import React, {Component, Fragment} from "react";
import {getMovies} from "../services/fakeMovieService";

class Movies extends Component {
    state = {movies: getMovies()};

    handleDelete = (movie) => {
        const movies = this.state.movies.filter((m) => m._id !== movie._id);
        // const newMovies = [...this.state.movies];
        // const index = newMovies.indexOf(movie);
        // newMovies.splice(index, 1);
        this.setState({movies});
    };

    render() {
        const {length: count} = this.state.movies;

        if (count === 0) return <p>There are no movies in the database.</p>;

        return (
            <Fragment>
                <p>Showing {count} movies in the database.</p>
                <table className="table table-striped">
                    <caption>List of movies</caption>
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Rate</th>
                        <th scope="col"/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map((movie, index) => (
                        <tr key={movie._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button
                                    onClick={() => this.handleDelete(movie)}
                                    className="btn btn-danger btn-sm"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

export default Movies;
