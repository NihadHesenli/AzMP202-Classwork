import {
    useDeleteCategoryByIdMutation,
    useGetAllCategoriesQuery,
    usePostNewCategoryMutation,
  } from "../redux/services/productApi.js";
  import { Table } from "antd";
  import { useState } from "react";
  
  const Categories = () => {
    const {
      data: categories,
      isLoading,
      isError,
      refetch,
    } = useGetAllCategoriesQuery();
  
    const [category, setCategory] = useState({ name: "", description: "" });
    const [postCategory, { isLoading: isPostLoading, isError: postError }] =
      usePostNewCategoryMutation();
  
    const [deleteCategoryById, deleteResponse] = useDeleteCategoryByIdMutation();
  
    const handleAddCategory = async (e) => {
      e.preventDefault();
      try {
        await postCategory(category);
        setCategory({ name: "", description: "" });
        refetch();
      } catch (error) {
        console.log("Error while adding category:", error);
      }
    };
  
    const handleDelete = async (categoryId) => {
      try {
        await deleteCategoryById(categoryId);
        refetch();
      } catch (error) {
        console.log("Error while deleting category:", error);
      }
    };
  
    const columns = [
      { title: "ID", dataIndex: "id" },
      { title: "Name", dataIndex: "name" },
      { title: "Description", dataIndex: "description" },
      {
        title: "Actions",
        render: (_, prod) => (
          <div>
            <button type="link" onClick={() => handleDelete(prod.id)}>
              Delete
            </button>
            <button type="link">Edit</button>
          </div>
        ),
      },
    ];
  
    const onChange = (pagination, filters, sorter, extra) => {
      console.log("params", pagination, filters, sorter, extra);
    };
  
    return (
      <>
        <div id="admin-products">
          <div className="container">
            <div className="admin-products">
              <Table
                columns={columns}
                dataSource={categories}
                onChange={onChange}
                showSorterTooltip={{ target: "sorter-icon" }}
                rowKey="id"
              />
            </div>
          </div>
        </div>
  
        <form onSubmit={handleAddCategory}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={category.name}
            onChange={(e) =>
              setCategory({ ...category, name: e.target.value.trim() })
            }
          />
          <br />
          <br />
          <label htmlFor="desc">Description: </label>
          <input
            type="text"
            id="desc"
            value={category.description}
            onChange={(e) =>
              setCategory({ ...category, description: e.target.value.trim() })
            }
          />
          <br />
          <br />
          <button type="submit" disabled={isPostLoading}>
            {isPostLoading ? "Adding..." : "Add"}
          </button>
        </form>
  
        {postError && (
          <div style={{ color: "red" }}>
            Error occurred while adding category.
          </div>
        )}
      </>
    );
  };
  
  export default Categories;
  