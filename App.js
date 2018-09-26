"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var instructions = react_native_1.Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        console.log("test");
        return (react_1.default.createElement(react_native_1.View, { style: styles.container },
            react_1.default.createElement(react_native_1.Text, { style: styles.welcome }, "Welcome to React Native!"),
            react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, "To get started, edit App.tsx"),
            react_1.default.createElement(react_native_1.Text, { style: styles.instructions }, instructions)));
    };
    return App;
}(react_1.Component));
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7O0dBUUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCw2Q0FBdUM7QUFDdkMsNkNBQThEO0FBRTlELElBQU0sWUFBWSxHQUFHLHVCQUFRLENBQUMsTUFBTSxDQUFDO0lBQ25DLEdBQUcsRUFBRSwwQkFBMEIsR0FBRyw2QkFBNkI7SUFDL0QsT0FBTyxFQUNMLDRDQUE0QztRQUM1Qyx5Q0FBeUM7Q0FDNUMsQ0FBQyxDQUFDO0FBR0g7SUFBaUMsdUJBQWdCO0lBQWpEOztJQVdBLENBQUM7SUFWQyxvQkFBTSxHQUFOO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQ0wsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sK0JBQWlDO1lBQzVELDhCQUFDLG1CQUFJLElBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxZQUFZLG1DQUFxQztZQUNyRSw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsWUFBWSxJQUFHLFlBQVksQ0FBUSxDQUNsRCxDQUNSLENBQUM7SUFDSixDQUFDO0lBQ0gsVUFBQztBQUFELENBQUMsQUFYRCxDQUFpQyxpQkFBUyxHQVd6Qzs7QUFFRCxJQUFNLE1BQU0sR0FBRyx5QkFBVSxDQUFDLE1BQU0sQ0FBQztJQUMvQixTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUsQ0FBQztRQUNQLGNBQWMsRUFBRSxRQUFRO1FBQ3hCLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLGVBQWUsRUFBRSxTQUFTO0tBQzNCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsUUFBUSxFQUFFLEVBQUU7UUFDWixTQUFTLEVBQUUsUUFBUTtRQUNuQixNQUFNLEVBQUUsRUFBRTtLQUNYO0lBQ0QsWUFBWSxFQUFFO1FBQ1osU0FBUyxFQUFFLFFBQVE7UUFDbkIsS0FBSyxFQUFFLFNBQVM7UUFDaEIsWUFBWSxFQUFFLENBQUM7S0FDaEI7Q0FDRixDQUFDLENBQUMifQ==