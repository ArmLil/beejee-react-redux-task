import React from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import CreateTaskForm from "../containers/CreateTaskForm";
import Loader from "../components/Loader/Loader";
import Pagination from "../components/Pagination";
import { fetchData, createNewTask, setUrl } from "../actions";

class TasksContainer extends React.Component {
  state = {
    sortDirection: "asc",
    sortField: "id",
    page: 0
  };

  componentDidMount() {
    this.props.onFetchData(this.props.getUrl);
  }

  componentWillUpdate(nextProps, nextState) {
    if (
      this.props.getUrl !== nextProps.getUrl ||
      nextProps.taskCreateProcessed
    ) {
      this.props.onFetchData(nextProps.getUrl);
    }
  }

  handleSort = (event, sortField) => {
    event.preventDefault();
    const sortDirection = this.state.sortDirection === "asc" ? "desc" : "asc";
    this.setState({ sortDirection, sortField });
    this.props.onSetUrl(sortField, sortDirection, this.state.page);
  };

  pageChangeHandler = page => {
    console.log("pageChangeHandler", page);
    this.setState({ page: parseInt(page.selected) });
    this.props.onSetUrl(
      this.state.sortField,
      this.state.sortDirection,
      page.selected
    );
  };

  //this part is not implemented
  handleEditTask = task => {
    console.log({ task });
    alert("Edit interface is not supported!");
  };

  render() {
    const {
      error,
      loading,
      data,
      onCreateNewTask,
      pageCount,
      isAdmin
    } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="container d-flex flex-column">
        <Table
          data={data}
          onSort={this.handleSort}
          sortDirection={this.state.sortDirection}
          sortField={this.state.sortField}
          disabled={!isAdmin}
          editTask={this.handleEditTask}
        />
        <CreateTaskForm createNewTask={onCreateNewTask} />
        <Pagination
          pageCount={Math.ceil(parseInt(pageCount) / 3)}
          pageChangeHandler={this.pageChangeHandler}
          forcePage={this.state.page}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.dataReducer.items,
    loading: state.dataReducer.loading,
    error: state.dataReducer.error,
    taskCreateProcessed: state.dataReducer.taskCreateProcessed,
    getUrl: state.getUrl,
    pageCount: state.dataReducer.pageCount,
    isAdmin: state.isAdmin
  };
};

const mapDispatchToProps = dispatch => ({
  onFetchData: url => {
    dispatch(fetchData(url));
  },
  onCreateNewTask: data => {
    dispatch(createNewTask(data));
  },
  onSetUrl: (sortField, sortDirection, page) =>
    dispatch(setUrl(sortField, sortDirection, page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TasksContainer);
