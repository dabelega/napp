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
                      console.log(sortOption),
                      ';',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Tb3VyY2UuanN4P2I5MzciXSwibmFtZXMiOlsibmV3c0FjdGlvbnMiLCJTb3VyY2UiLCJzdGF0ZSIsInNlYXJjaFN0cmluZyIsInNvdXJjZXMiLCJmZXRjaE5ld3NTb3VyY2VzIiwiYmluZCIsImdldFNvdXJjZXMiLCJvbiIsInJlbW92ZUxpc3RlbmVyIiwic2V0U3RhdGUiLCJmZXRjaE5ld3NBcnRpY2xlcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImxlbmd0aCIsImZpbHRlciIsInNvdXJjZU5hbWUiLCJuYW1lIiwibWF0Y2giLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsInNvcnRCeXNBdmFpbGFibGUiLCJzb3J0T3B0aW9uIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0lBQVlBLFc7O0FBQ1o7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUVxQkMsTTs7O0FBQ25CLG9CQUFjO0FBQUE7O0FBQUE7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1JDLG9CQUFlLEVBRFA7QUFFUkMsZUFBUztBQUZELEtBQWI7QUFJQSxVQUFLQyxnQkFBTCxHQUF3QixNQUFLQSxnQkFBTCxDQUFzQkMsSUFBdEIsT0FBeEI7QUFOZTtBQU9iOzs7O3lDQUVtQjtBQUNsQk4sa0JBQVlPLFVBQVo7QUFDQSwwQkFBVUMsRUFBVixDQUFhLGdCQUFiLEVBQThCLEtBQUtILGdCQUFuQztBQUNEOzs7MkNBRXFCO0FBQ3BCLDBCQUFVSSxjQUFWLENBQXlCLGdCQUF6QixFQUEwQyxLQUFLSixnQkFBL0M7QUFDRDs7O3VDQUVpQjtBQUNoQixXQUFLSyxRQUFMLENBQWMsRUFBRU4sU0FBUyxvQkFBVUMsZ0JBQVYsRUFBWCxFQUFkO0FBQ0Q7Ozt3Q0FFa0I7QUFDakIsV0FBS0ssUUFBTCxDQUFjLEVBQUVOLFNBQVMsb0JBQVVPLGlCQUFWLEVBQVgsRUFBZDtBQUNEOzs7aUNBRVlDLEMsRUFBRTtBQUNiLFdBQUtGLFFBQUwsQ0FBYyxFQUFDUCxjQUFhUyxFQUFFQyxNQUFGLENBQVNDLEtBQXZCLEVBQWQ7QUFDRDs7OzZCQUVRO0FBQ1AsVUFBSVgsZUFBZSxLQUFLRCxLQUFMLENBQVdDLFlBQVgsQ0FBd0JZLElBQXhCLEdBQStCQyxXQUEvQixFQUFuQjtBQUNBLFVBQUlaLFVBQVUsaUJBQUVhLEdBQUYsQ0FBTSxLQUFLZixLQUFMLENBQVdFLE9BQWpCLENBQWQ7O0FBRUEsVUFBR0QsYUFBYWUsTUFBYixHQUFzQixDQUF6QixFQUEyQjtBQUN6QmQsa0JBQVVBLFFBQVFlLE1BQVIsQ0FBZSxVQUFTQyxVQUFULEVBQW9CO0FBQzNDLGlCQUFPQSxXQUFXQyxJQUFYLENBQWdCTCxXQUFoQixHQUE4Qk0sS0FBOUIsQ0FBcUNuQixZQUFyQyxDQUFQO0FBQ0QsU0FGUyxDQUFWO0FBR0Q7O0FBR0gsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRSwrREFERjtBQUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUNFLG9CQUFLLE1BRFAsRUFDYyxPQUFPLEtBQUtELEtBQUwsQ0FBV0MsWUFEaEM7QUFFRSx3QkFBVSxLQUFLb0IsWUFBTCxDQUFrQmpCLElBQWxCLENBQXVCLElBQXZCLENBRlosRUFFMEMsYUFBWSxXQUZ0RDtBQURGLFdBRkY7QUFRRTtBQUFBO0FBQUEsY0FBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFDSUYsc0JBQVFhLEdBQVIsQ0FBWSxVQUFTRyxVQUFULEVBQW9CSSxLQUFwQixFQUEwQjtBQUN0Qyx1QkFDRTtBQUFBO0FBQUEsb0JBQUksS0FBS0EsS0FBVDtBQUNHSiw2QkFBV0MsSUFEZDtBQUVHRCw2QkFBV0ssZ0JBQVgsQ0FBNEJSLEdBQTVCLENBQWdDLFVBQUNTLFVBQUQsRUFBZ0I7QUFDaEQ7QUFBQTtBQUFBLHdCQUFHLDhCQUE0Qk4sV0FBV08sRUFBdkMscUJBQXlERCxVQUE1RDtBQUNDRSw4QkFBUUMsR0FBUixDQUFZSCxVQUFaLENBREQ7QUFBQTtBQUVHQTtBQUZIO0FBS0QsbUJBTkM7QUFGSCxpQkFERjtBQWFDLGVBZEQ7QUFESjtBQURGLFdBUkY7QUE2QkU7QUE3QkY7QUFERixPQURGO0FBbUNEOzs7O0VBN0VtQyxnQkFBTUksUzs7a0JBQXJCN0IsTSIsImZpbGUiOiIwLjdmZGFlMTg5ZmEyNmM2M2Y0NWFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnLi4vLi4vc2Fzcy9zdHlsZXMuc2Nzcyc7XG5pbXBvcnQgKiBhcyBuZXdzQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL25ld3NBY3Rpb25zJztcbmltcG9ydCBuZXdzU3RvcmUgZnJvbSAnLi4vc3RvcmVzL25ld3NTdG9yZSc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTb3VyY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAoKXtcblx0c3VwZXIoKTtcblx0dGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFN0cmluZyA6ICcnLFxuICAgICAgc291cmNlczogW11cdFx0XHRcblx0fTtcblx0dGhpcy5mZXRjaE5ld3NTb3VyY2VzID0gdGhpcy5mZXRjaE5ld3NTb3VyY2VzLmJpbmQodGhpcyk7XHRcdFxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCl7XG4gICAgbmV3c0FjdGlvbnMuZ2V0U291cmNlcygpO1xuICAgIG5ld3NTdG9yZS5vbignc291cmNlc19jaGFuZ2UnLHRoaXMuZmV0Y2hOZXdzU291cmNlcyk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5Nb3VudCgpe1xuICAgIG5ld3NTdG9yZS5yZW1vdmVMaXN0ZW5lcignc291cmNlc19jaGFuZ2UnLHRoaXMuZmV0Y2hOZXdzU291cmNlcyk7XG4gIH1cblxuICBmZXRjaE5ld3NTb3VyY2VzKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNvdXJjZXM6IG5ld3NTdG9yZS5mZXRjaE5ld3NTb3VyY2VzKCkgfSk7XG4gIH1cblxuICBmZXRjaE5ld3NBcnRpY2xlcygpe1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzb3VyY2VzOiBuZXdzU3RvcmUuZmV0Y2hOZXdzQXJ0aWNsZXMoKSB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKXtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2hTdHJpbmc6ZS50YXJnZXQudmFsdWV9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgc2VhcmNoU3RyaW5nID0gdGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmcudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgbGV0IHNvdXJjZXMgPSBfLm1hcCh0aGlzLnN0YXRlLnNvdXJjZXMpO1xuICAgIFxuICAgIGlmKHNlYXJjaFN0cmluZy5sZW5ndGggPiAwKXtcbiAgICAgIHNvdXJjZXMgPSBzb3VyY2VzLmZpbHRlcihmdW5jdGlvbihzb3VyY2VOYW1lKXtcbiAgICAgICAgcmV0dXJuIHNvdXJjZU5hbWUubmFtZS50b0xvd2VyQ2FzZSgpLm1hdGNoKCBzZWFyY2hTdHJpbmcgKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIiA+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hTdHJpbmd9IFxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9IHBsYWNlaG9sZGVyPVwiVHlwZSBoZXJlXCIgLz5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvdXJjZS1saXN0XCI+XG4gICAgICAgICAgPHVsPiBcbiAgICAgICAgICAgIHsgc291cmNlcy5tYXAoZnVuY3Rpb24oc291cmNlTmFtZSxpbmRleCl7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PiBcbiAgICAgICAgICAgICAgICAgIHtzb3VyY2VOYW1lLm5hbWV9IFxuICAgICAgICAgICAgICAgICAge3NvdXJjZU5hbWUuc29ydEJ5c0F2YWlsYWJsZS5tYXAoKHNvcnRPcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL2FydGljbGVzP3NvdXJjZUlkPSR7c291cmNlTmFtZS5pZH0mc29ydE9wdGlvbnM9JHtzb3J0T3B0aW9ufWB9PlxuICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhzb3J0T3B0aW9uKX07XG4gICAgICAgICAgICAgICAgICAgICB7c29ydE9wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICk7IFxuICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+ICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cdFxufVx0XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1NvdXJjZS5qc3giXSwic291cmNlUm9vdCI6IiJ9