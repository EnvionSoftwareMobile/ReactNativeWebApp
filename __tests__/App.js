"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var App_1 = __importDefault(require("../App"));
it('renders correctly with defaults', function () {
    var view = react_test_renderer_1.default
        .create(react_1.default.createElement(App_1.default, null))
        .toJSON();
    expect(view).toMatchSnapshot();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUEwQjtBQUMxQiw0RUFBMkM7QUFFM0MsK0NBQXlCO0FBRXpCLEVBQUUsQ0FBQyxpQ0FBaUMsRUFBRTtJQUNsQyxJQUFNLElBQUksR0FBRyw2QkFBUTtTQUNoQixNQUFNLENBQUMsOEJBQUMsYUFBRyxPQUFFLENBQUM7U0FDZCxNQUFNLEVBQUUsQ0FBQztJQUVkLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQyJ9