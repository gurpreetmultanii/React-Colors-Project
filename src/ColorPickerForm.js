import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { withStyles } from '@material-ui/core/styles'
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = { currentColor: "teal", newColorName: "" };
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule('isColorUnique', (value) =>
            this.props.colors.every(
                ({ color }) => color.toLowerCase() !== this.state.currentColor
            )
        );
    }
    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit() {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }
        this.props.addNewColor(newColor);
        this.setState({ newColorName: "" })
    }
    render() {
        const { paletteIsFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={(newColor) => this.updateCurrentColor(newColor)}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} ref="form" instantValidate={false}>
                    <TextValidator
                        value={newColorName}
                        name="newColorName"
                        variant="filled"
                        placeholder="Color Name"
                        margin="normal"
                        onChange={this.handleChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={["Enter a color name", "Color name must be unique", "Color already used"]}
                        className={classes.colorNameInput}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
                        disabled={paletteIsFull}
                        className={classes.addColor}
                    >
                        {paletteIsFull ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);