// eslint-disable-next-line
import React from 'react';
import './SearchBar.css';

let sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
}

class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {  term : " ",
                        location : " ",
                        sortBy : "best_match"
        }
        this.sortByOptions = {
                        "Best Match": "best_match",
                        "Highest Rated": "rating",
                        "Most Reviewed": "review_count",
        }
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    getSortByClass(sortByOptions) {
        //no-unused-expressions
        if(this.state.sortBy === sortByOptions)  {
            return 'active';
        } else {
            return ' '
        }
    }
    handleSortByChange(newSortedOption) {
        this.setState({
            sortBy : newSortedOption
        })
    }
    handleTermChange(event){
        const newTerm = event.target.value;
        this.setState({
            term : newTerm
        })
    }
    handleLocationChange(event){
        const newLocation = event.target.value;
        this.setState({
            location : newLocation
        })

    }
    handleSearch(event) {
        event.preventDefault();
        this.props.searchYelp(this.state.term , this.state.location , this.state.sortBy);
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (<li className={this.getSortByClass(sortByOptionValue)} key={sortByOptionValue} onClick={this.handleSortByChange.bind(this ,sortByOptionValue)}>{sortByOption}</li>);
        });
    }
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>{this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" onChange = {this.handleTermChange}/>
                    <input placeholder="Where?" onChange = {this.handleLocationChange}/>
                </div>
                <div className="SearchBar-submit" onClick = {this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;
