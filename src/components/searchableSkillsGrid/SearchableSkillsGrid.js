import React, { Component } from 'react';
import '../../css/SearchableSkillsGrid.css'
import SearchBar from '../searchBar/SearchBar';
import SkillBar from '../skillBar/SkillBar';

class SearchableSkillsGrid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSkills: [
                { name: "java", level: "80%" },
                { name: "python", level: "60%" },
                { name: "javascript", level: "40%" },
                { name: "pyret", level: "80%" },
                { name: "r", level: "40%" },
                { name: "c", level: "20%" },
                { name: "html+css", level: "60%" },
                { name: "sql", level: "60%" },
                { name: "django", level: "60%" },
                { name: "react", level: "60%" },
                { name: "figma", level: "40%" },
                { name: "illustrator", level: "60%" },
                { name: "indesign", level: "60%" },
                { name: "photoshop", level: "40%" },
                { name: "premiere pro", level: "20%" },
                { name: "excel/sheets", level: "60%" },
                { name: "google suite", level: "80%" },
                { name: "microsoft suite", level: "80%" },
            ],
            filteredSkills: [],
            tags: ["web dev", "software", "design", "language"]
        };
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.setState({
            filteredSkills: this.state.allSkills,
        })
    }

    handleChange(e) {
        let currentList = [];
        let newList = [];

        if (e.target.value !== "") {
            currentList = this.state.allSkills;
            newList = currentList.filter(skill => {
                const lowercaseName = skill.name.toLowerCase();
                const searchTerm = e.target.value.toLowerCase();
                return lowercaseName.includes(searchTerm)
            });
        } else {
            newList = this.state.allSkills
        }

        this.setState({
            filteredSkills: newList,
        })
    }

    // TODO add tags
    render() {
        return (
            <div className={"SearchableSkillsGrid"}>
                <input
                    type="text"
                    placeholder="Search skills"
                    onChange={this.handleChange}
                    className="SearchableSkillsGrid-search-bar"
                />
                <div className="SearchableSkillsGrid-bars-grid">
                    {this.state.filteredSkills.map(skill =>
                        <SkillBar name={skill.name} level={skill.level} />
                    )}
                </div>
            </div>
        )
    }
}
export default SearchableSkillsGrid;