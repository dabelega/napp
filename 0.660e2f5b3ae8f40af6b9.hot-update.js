webpackHotUpdate(0,{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(6), RootInstanceProvider = __webpack_require__(7), ReactMount = __webpack_require__(3), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(22);

var _lodash2 = _interopRequireDefault(_lodash);

__webpack_require__(10);

var _newsActions = __webpack_require__(24);

var newsActions = _interopRequireWildcard(_newsActions);

var _newsStore = __webpack_require__(25);

var _newsStore2 = _interopRequireDefault(_newsStore);

var _Header = __webpack_require__(39);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(47);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Source = function (_React$Component) {
  _inherits(Source, _React$Component);

  function Source() {
    _classCallCheck(this, Source);

    var _this = _possibleConstructorReturn(this, (Source.__proto__ || Object.getPrototypeOf(Source)).call(this));

    _this.state = {
      searchString: '',
      sources: []
    };
    _this.fetchNewsSources = _this.fetchNewsSources.bind(_this);
    return _this;
  }

  _createClass(Source, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      newsActions.getSources();
      _newsStore2.default.on('sources_change', this.fetchNewsSources);
    }
  }, {
    key: 'componentWillUnMount',
    value: function componentWillUnMount() {
      _newsStore2.default.removeListener('sources_change', this.fetchNewsSources);
    }
  }, {
    key: 'fetchNewsSources',
    value: function fetchNewsSources() {
      this.setState({ sources: _newsStore2.default.fetchNewsSources() });
    }
  }, {
    key: 'fetchNewsArticles',
    value: function fetchNewsArticles() {
      this.setState({ sources: _newsStore2.default.fetchNewsArticles() });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ searchString: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var searchString = this.state.searchString.trim().toLowerCase();
      var sources = _lodash2.default.map(this.state.sources);

      if (searchString.length > 0) {
        sources = sources.filter(function (sourceName) {
          return sourceName.name.toLowerCase().match(searchString);
        });
      }

      return _react2.default.createElement(
        'div',
        { className: 'wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'center' },
          _react2.default.createElement(_Header2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'search-container' },
            _react2.default.createElement('input', {
              type: 'text', value: this.state.searchString,
              onChange: this.handleChange.bind(this), placeholder: 'Type here' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'source-list' },
            _react2.default.createElement(
              'ul',
              null,
              sources.map(function (sourceName, index) {
                return _react2.default.createElement(
                  'li',
                  { key: index },
                  sourceName.name,
                  sourceName.sortBysAvailable.map(function (sortOption) {
                    _react2.default.createElement(
                      'a',
                      { href: '/articles?sourceId=' + sourceName.id + '&sortOptions=' + sortOption },
                      console.log(typeof sortOption === 'undefined' ? 'undefined' : _typeof(sortOption)),
                      sortOption
                    );
                  })
                );
              })
            )
          ),
          _react2.default.createElement(_Footer2.default, null)
        )
      );
    }
  }]);

  return Source;
}(_react2.default.Component);

exports.default = Source;

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(8); if (makeExportsHot(module, __webpack_require__(0))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Source.jsx" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3VyY2UuanN4P2I5MzciXSwibmFtZXMiOlsibmV3c0FjdGlvbnMiLCJTb3VyY2UiLCJzdGF0ZSIsInNlYXJjaFN0cmluZyIsInNvdXJjZXMiLCJmZXRjaE5ld3NTb3VyY2VzIiwiYmluZCIsImdldFNvdXJjZXMiLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwic2V0U3RhdGUiLCJmZXRjaE5ld3NBcnRpY2xlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImxlbmd0aCIsImZpbHRlciIsInNvdXJjZU5hbWUiLCJuYW1lIiwibWF0Y2giLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsInNvcnRCeXNBdmFpbGFibGUiLCJzb3J0T3B0aW9uIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7SUFBWUEsVzs7QUFDWjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQyxNOzs7QUFDbkIsb0JBQWM7QUFBQTs7QUFBQTs7QUFFZixVQUFLQyxLQUFMLEdBQWE7QUFDUkMsb0JBQWUsRUFEUDtBQUVSQyxlQUFTO0FBRkQsS0FBYjtBQUlBLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCQyxJQUF0QixPQUF4QjtBQU5lO0FBT2I7Ozs7eUNBRW1CO0FBQ2xCTixrQkFBWU8sVUFBWjtBQUNBLDBCQUFVQyxFQUFWLENBQWEsZ0JBQWIsRUFBOEIsS0FBS0gsZ0JBQW5DO0FBQ0Q7OzsyQ0FFcUI7QUFDcEIsMEJBQVVJLGNBQVYsQ0FBeUIsZ0JBQXpCLEVBQTBDLEtBQUtKLGdCQUEvQztBQUNEOzs7dUNBRWlCO0FBQ2hCLFdBQUtLLFFBQUwsQ0FBYyxFQUFFTixTQUFTLG9CQUFVQyxnQkFBVixFQUFYLEVBQWQ7QUFDRDs7O3dDQUVrQjtBQUNqQixXQUFLSyxRQUFMLENBQWMsRUFBRU4sU0FBUyxvQkFBVU8saUJBQVYsRUFBWCxFQUFkO0FBQ0Q7OztpQ0FFWUMsQyxFQUFFO0FBQ2IsV0FBS0YsUUFBTCxDQUFjLEVBQUNQLGNBQWFTLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdkIsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxVQUFJWCxlQUFlLEtBQUtELEtBQUwsQ0FBV0MsWUFBWCxDQUF3QlksSUFBeEIsR0FBK0JDLFdBQS9CLEVBQW5CO0FBQ0EsVUFBSVosVUFBVSxpQkFBRWEsR0FBRixDQUFNLEtBQUtmLEtBQUwsQ0FBV0UsT0FBakIsQ0FBZDs7QUFFQSxVQUFHRCxhQUFhZSxNQUFiLEdBQXNCLENBQXpCLEVBQTJCO0FBQ3pCZCxrQkFBVUEsUUFBUWUsTUFBUixDQUFlLFVBQVNDLFVBQVQsRUFBb0I7QUFDM0MsaUJBQU9BLFdBQVdDLElBQVgsQ0FBZ0JMLFdBQWhCLEdBQThCTSxLQUE5QixDQUFxQ25CLFlBQXJDLENBQVA7QUFDRCxTQUZTLENBQVY7QUFHRDs7QUFHSCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFLCtEQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQ0Usb0JBQUssTUFEUCxFQUNjLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxZQURoQztBQUVFLHdCQUFVLEtBQUtvQixZQUFMLENBQWtCakIsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGWixFQUUwQyxhQUFZLFdBRnREO0FBREYsV0FGRjtBQVFFO0FBQUE7QUFBQSxjQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNJRixzQkFBUWEsR0FBUixDQUFZLFVBQVNHLFVBQVQsRUFBb0JJLEtBQXBCLEVBQTBCO0FBQ3RDLHVCQUNFO0FBQUE7QUFBQSxvQkFBSSxLQUFLQSxLQUFUO0FBQ0dKLDZCQUFXQyxJQURkO0FBRUdELDZCQUFXSyxnQkFBWCxDQUE0QlIsR0FBNUIsQ0FBZ0MsVUFBQ1MsVUFBRCxFQUFnQjtBQUNoRDtBQUFBO0FBQUEsd0JBQUcsOEJBQTRCTixXQUFXTyxFQUF2QyxxQkFBeURELFVBQTVEO0FBQ0NFLDhCQUFRQyxHQUFSLFFBQW1CSCxVQUFuQix5Q0FBbUJBLFVBQW5CLEVBREQ7QUFFR0E7QUFGSDtBQUtELG1CQU5DO0FBRkgsaUJBREY7QUFhQyxlQWREO0FBREo7QUFERixXQVJGO0FBNkJFO0FBN0JGO0FBREYsT0FERjtBQW1DRDs7OztFQTdFbUMsZ0JBQU1JLFM7O2tCQUFyQjdCLE0iLCJmaWxlIjoiMC42NjBlMmY1YjNhZThmNDBhZjZiOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJy4uLy4uL3Nhc3Mvc3R5bGVzLnNjc3MnO1xuaW1wb3J0ICogYXMgbmV3c0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9uZXdzQWN0aW9ucyc7XG5pbXBvcnQgbmV3c1N0b3JlIGZyb20gJy4uL3N0b3Jlcy9uZXdzU3RvcmUnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU291cmNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKCl7XG5cdHN1cGVyKCk7XG5cdHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hTdHJpbmcgOiAnJyxcbiAgICAgIHNvdXJjZXM6IFtdXHRcdFx0XG5cdH07XG5cdHRoaXMuZmV0Y2hOZXdzU291cmNlcyA9IHRoaXMuZmV0Y2hOZXdzU291cmNlcy5iaW5kKHRoaXMpO1x0XHRcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgIG5ld3NBY3Rpb25zLmdldFNvdXJjZXMoKTtcbiAgICBuZXdzU3RvcmUub24oJ3NvdXJjZXNfY2hhbmdlJyx0aGlzLmZldGNoTmV3c1NvdXJjZXMpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVuTW91bnQoKXtcbiAgICBuZXdzU3RvcmUucmVtb3ZlTGlzdGVuZXIoJ3NvdXJjZXNfY2hhbmdlJyx0aGlzLmZldGNoTmV3c1NvdXJjZXMpO1xuICB9XG5cbiAgZmV0Y2hOZXdzU291cmNlcygpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzb3VyY2VzOiBuZXdzU3RvcmUuZmV0Y2hOZXdzU291cmNlcygpIH0pO1xuICB9XG5cbiAgZmV0Y2hOZXdzQXJ0aWNsZXMoKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgc291cmNlczogbmV3c1N0b3JlLmZldGNoTmV3c0FydGljbGVzKCkgfSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoU3RyaW5nOmUudGFyZ2V0LnZhbHVlfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHNlYXJjaFN0cmluZyA9IHRoaXMuc3RhdGUuc2VhcmNoU3RyaW5nLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGxldCBzb3VyY2VzID0gXy5tYXAodGhpcy5zdGF0ZS5zb3VyY2VzKTtcbiAgICBcbiAgICBpZihzZWFyY2hTdHJpbmcubGVuZ3RoID4gMCl7XG4gICAgICBzb3VyY2VzID0gc291cmNlcy5maWx0ZXIoZnVuY3Rpb24oc291cmNlTmFtZSl7XG4gICAgICAgIHJldHVybiBzb3VyY2VOYW1lLm5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaCggc2VhcmNoU3RyaW5nICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCIgPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoU3RyaW5nfSBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBwbGFjZWhvbGRlcj1cIlR5cGUgaGVyZVwiIC8+XG4gICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb3VyY2UtbGlzdFwiPlxuICAgICAgICAgIDx1bD4gXG4gICAgICAgICAgICB7IHNvdXJjZXMubWFwKGZ1bmN0aW9uKHNvdXJjZU5hbWUsaW5kZXgpe1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT4gXG4gICAgICAgICAgICAgICAgICB7c291cmNlTmFtZS5uYW1lfSBcbiAgICAgICAgICAgICAgICAgIHtzb3VyY2VOYW1lLnNvcnRCeXNBdmFpbGFibGUubWFwKChzb3J0T3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9hcnRpY2xlcz9zb3VyY2VJZD0ke3NvdXJjZU5hbWUuaWR9JnNvcnRPcHRpb25zPSR7c29ydE9wdGlvbn1gfT5cbiAgICAgICAgICAgICAgICAgICB7Y29uc29sZS5sb2codHlwZW9mIHNvcnRPcHRpb24pfVxuICAgICAgICAgICAgICAgICAgICAge3NvcnRPcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICApOyBcbiAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPiAgXG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXHRcbn1cdFxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Tb3VyY2UuanN4Il0sInNvdXJjZVJvb3QiOiIifQ==