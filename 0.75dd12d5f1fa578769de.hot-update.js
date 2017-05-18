webpackHotUpdate(0,{

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(6), RootInstanceProvider = __webpack_require__(7), ReactMount = __webpack_require__(3), React = __webpack_require__(0); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

      var Display = sources.map(function (source) {
        _react2.default.createElement(
          'li',
          { key: source.name },
          source.name,
          ' ',
          _react2.default.createElement('br', null),
          'source.sortBysAvailable.map(sort => ',
          _react2.default.createElement(
            'a',
            { href: '/articles?sourceId=' + sort + '&sortOptions=' + sort },
            _react2.default.createElement(
              'span',
              { className: 'spanner' },
              sort
            )
          ),
          ');'
        );
      });

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
              Display
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3VyY2UuanN4P2I5MzciXSwibmFtZXMiOlsibmV3c0FjdGlvbnMiLCJTb3VyY2UiLCJzdGF0ZSIsInNlYXJjaFN0cmluZyIsInNvdXJjZXMiLCJmZXRjaE5ld3NTb3VyY2VzIiwiYmluZCIsImdldFNvdXJjZXMiLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwic2V0U3RhdGUiLCJmZXRjaE5ld3NBcnRpY2xlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImxlbmd0aCIsImZpbHRlciIsInNvdXJjZU5hbWUiLCJuYW1lIiwibWF0Y2giLCJEaXNwbGF5Iiwic291cmNlIiwic29ydCIsImhhbmRsZUNoYW5nZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztJQUFZQSxXOztBQUNaOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJDLE07OztBQUNuQixvQkFBYztBQUFBOztBQUFBOztBQUVmLFVBQUtDLEtBQUwsR0FBYTtBQUNSQyxvQkFBZSxFQURQO0FBRVJDLGVBQVM7QUFGRCxLQUFiO0FBSUEsVUFBS0MsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JDLElBQXRCLE9BQXhCO0FBTmU7QUFPYjs7Ozt5Q0FFbUI7QUFDbEJOLGtCQUFZTyxVQUFaO0FBQ0EsMEJBQVVDLEVBQVYsQ0FBYSxnQkFBYixFQUE4QixLQUFLSCxnQkFBbkM7QUFDRDs7OzJDQUVxQjtBQUNwQiwwQkFBVUksY0FBVixDQUF5QixnQkFBekIsRUFBMEMsS0FBS0osZ0JBQS9DO0FBQ0Q7Ozt1Q0FFaUI7QUFDaEIsV0FBS0ssUUFBTCxDQUFjLEVBQUVOLFNBQVMsb0JBQVVDLGdCQUFWLEVBQVgsRUFBZDtBQUNEOzs7d0NBRWtCO0FBQ2pCLFdBQUtLLFFBQUwsQ0FBYyxFQUFFTixTQUFTLG9CQUFVTyxpQkFBVixFQUFYLEVBQWQ7QUFDRDs7O2lDQUVZQyxDLEVBQUU7QUFDYixXQUFLRixRQUFMLENBQWMsRUFBQ1AsY0FBYVMsRUFBRUMsTUFBRixDQUFTQyxLQUF2QixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUNQLFVBQUlYLGVBQWUsS0FBS0QsS0FBTCxDQUFXQyxZQUFYLENBQXdCWSxJQUF4QixHQUErQkMsV0FBL0IsRUFBbkI7QUFDQSxVQUFJWixVQUFVLGlCQUFFYSxHQUFGLENBQU0sS0FBS2YsS0FBTCxDQUFXRSxPQUFqQixDQUFkOztBQUVBLFVBQUdELGFBQWFlLE1BQWIsR0FBc0IsQ0FBekIsRUFBMkI7QUFDekJkLGtCQUFVQSxRQUFRZSxNQUFSLENBQWUsVUFBU0MsVUFBVCxFQUFvQjtBQUMzQyxpQkFBT0EsV0FBV0MsSUFBWCxDQUFnQkwsV0FBaEIsR0FBOEJNLEtBQTlCLENBQXFDbkIsWUFBckMsQ0FBUDtBQUNELFNBRlMsQ0FBVjtBQUdEOztBQUVELFVBQU1vQixVQUFVbkIsUUFBUWEsR0FBUixDQUFZLGtCQUFVO0FBQzFCO0FBQUE7QUFBQSxZQUFJLEtBQUtPLE9BQU9ILElBQWhCO0FBQXVCRyxpQkFBT0gsSUFBOUI7QUFBQTtBQUFvQyxtREFBcEM7QUFBQTtBQUVJO0FBQUE7QUFBQSxjQUFHLDhCQUE0QkksSUFBNUIscUJBQWdEQSxJQUFuRDtBQUNDO0FBQUE7QUFBQSxnQkFBTSxXQUFVLFNBQWhCO0FBQTJCQTtBQUEzQjtBQURELFdBRko7QUFBQTtBQUFBO0FBT0QsT0FSSyxDQUFoQjs7QUFXRixhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsU0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFLCtEQURGO0FBRUU7QUFBQTtBQUFBLGNBQUssV0FBVSxrQkFBZjtBQUNFO0FBQ0Usb0JBQUssTUFEUCxFQUNjLE9BQU8sS0FBS3ZCLEtBQUwsQ0FBV0MsWUFEaEM7QUFFRSx3QkFBVSxLQUFLdUIsWUFBTCxDQUFrQnBCLElBQWxCLENBQXVCLElBQXZCLENBRlosRUFFMEMsYUFBWSxXQUZ0RDtBQURGLFdBRkY7QUFRRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFDR2lCO0FBREg7QUFERixXQVJGO0FBY0U7QUFkRjtBQURGLE9BREY7QUFvQkQ7Ozs7RUF4RW1DLGdCQUFNSSxTOztrQkFBckIxQixNIiwiZmlsZSI6IjAuNzVkZDEyZDVmMWZhNTc4NzY5ZGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0ICcuLi8uLi9zYXNzL3N0eWxlcy5zY3NzJztcbmltcG9ydCAqIGFzIG5ld3NBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbmV3c0FjdGlvbnMnO1xuaW1wb3J0IG5ld3NTdG9yZSBmcm9tICcuLi9zdG9yZXMvbmV3c1N0b3JlJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdXJjZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yICgpe1xuXHRzdXBlcigpO1xuXHR0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoU3RyaW5nIDogJycsXG4gICAgICBzb3VyY2VzOiBbXVx0XHRcdFxuXHR9O1xuXHR0aGlzLmZldGNoTmV3c1NvdXJjZXMgPSB0aGlzLmZldGNoTmV3c1NvdXJjZXMuYmluZCh0aGlzKTtcdFx0XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICBuZXdzQWN0aW9ucy5nZXRTb3VyY2VzKCk7XG4gICAgbmV3c1N0b3JlLm9uKCdzb3VyY2VzX2NoYW5nZScsdGhpcy5mZXRjaE5ld3NTb3VyY2VzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbk1vdW50KCl7XG4gICAgbmV3c1N0b3JlLnJlbW92ZUxpc3RlbmVyKCdzb3VyY2VzX2NoYW5nZScsdGhpcy5mZXRjaE5ld3NTb3VyY2VzKTtcbiAgfVxuXG4gIGZldGNoTmV3c1NvdXJjZXMoKXtcbiAgICB0aGlzLnNldFN0YXRlKHsgc291cmNlczogbmV3c1N0b3JlLmZldGNoTmV3c1NvdXJjZXMoKSB9KTtcbiAgfVxuXG4gIGZldGNoTmV3c0FydGljbGVzKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvdXJjZXM6IG5ld3NTdG9yZS5mZXRjaE5ld3NBcnRpY2xlcygpIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGUpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFN0cmluZzplLnRhcmdldC52YWx1ZX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCBzZWFyY2hTdHJpbmcgPSB0aGlzLnN0YXRlLnNlYXJjaFN0cmluZy50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBsZXQgc291cmNlcyA9IF8ubWFwKHRoaXMuc3RhdGUuc291cmNlcyk7XG4gICAgXG4gICAgaWYoc2VhcmNoU3RyaW5nLmxlbmd0aCA+IDApe1xuICAgICAgc291cmNlcyA9IHNvdXJjZXMuZmlsdGVyKGZ1bmN0aW9uKHNvdXJjZU5hbWUpe1xuICAgICAgICByZXR1cm4gc291cmNlTmFtZS5uYW1lLnRvTG93ZXJDYXNlKCkubWF0Y2goIHNlYXJjaFN0cmluZyApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgRGlzcGxheSA9IHNvdXJjZXMubWFwKHNvdXJjZSA9PiB7XG4gICAgICAgICAgICAgICAgPGxpIGtleT17c291cmNlLm5hbWV9Pntzb3VyY2UubmFtZX0gPGJyIC8+XG4gICAgICAgICAgICAgICAgICBzb3VyY2Uuc29ydEJ5c0F2YWlsYWJsZS5tYXAoc29ydCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AvYXJ0aWNsZXM/c291cmNlSWQ9JHtzb3J0fSZzb3J0T3B0aW9ucz0ke3NvcnR9YH0+XG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzcGFubmVyXCI+e3NvcnR9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB9KTtcbiAgICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIiA+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmd9IFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZS1saXN0XCI+XG4gICAgICAgICAgPHVsPiBcbiAgICAgICAgICAgIHtEaXNwbGF5fVxuXG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz4gIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblx0XG59XHRcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvU291cmNlLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=