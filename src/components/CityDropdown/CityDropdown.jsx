import React , {Component} from "react";
import { FormattedMessage } from 'react-intl';
import WeatherService from "../../api/weatherService";
import './CityDropdown.scss';

class CityDropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cities: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    

    componentDidMount() {
        this.setState({
            cities: WeatherService.getCities()
        });
    }

    handleChange(e) {
        this.props.cityChanged(e.target.value);
    }

    render() {
        return (
            <select onChange={this.handleChange}>
                <FormattedMessage id="cityDropdown.placeholder">
                    {placeholder => 
                        <option value="">{placeholder}</option>
                    }
                </FormattedMessage>
                
                {this.state.cities.map((city) => {
                    return (
                        <option value={city.id} key={city.id}>
                            {city.name}
                        </option>
                    )
                })}
            </select>
        );
    }

}

export default CityDropdown;