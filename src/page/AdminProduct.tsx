import React from "react";
import { Space, Table, Tag, message, Popconfirm, Button } from "antd";
import { useDeleteProductMutation, useGetProductsQuery } from "@/api/product";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "@/interface/product";
import { Link } from "react-router-dom";
const AdminProduct = () => {
  const { data: ProductData } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [messApi, contextHolder] = message.useMessage();
  const data = ProductData?.map((item: any) => ({
    key: item.id,
    name: item.name,
    price: item.price,
  }));
  const confirm = (id: number | string) => {
    deleteProduct(id)
      .unwrap()
      .then(() => {
        messApi.open({
          type: "success",
          content: "Xoa thanh cong",
        });
      });
  };
  const columns: ColumnsType<IProduct> = [
    {
      title: "Ten san pham",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      render: ({ key: id }: { key: number | string }) => (
        <div>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => confirm(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Button>
            <Link to={`/admin/product/${id}/update`}>Update</Link>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <h2>Danh sach san pham</h2>
      <Button>
        <Link to={"/admin/product/add"}>Them</Link>
      </Button>
      {contextHolder}
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default AdminProduct;
