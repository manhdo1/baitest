import { DatePicker, Select, Table, Tag } from "antd";
import { Button } from "antd";
import { Form, Input } from "antd";
import { Col, Row } from "antd";
const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Mã nhân viên",
    dataIndex: "maNv",
    key: "age",
  },
  {
    title: "Họ tên",
    dataIndex: "hoten",
    key: "Sdt",
  },
  {
    title: "Số điện thoại",
    dataIndex: "Sdt",
    key: "Sdt",
  },

  {
    title: "Loại nhân viên",
    dataIndex: "loainv",
    key: "loainv",
  },
  {
    title: "Thuộc trạm",
    dataIndex: "thuocTram",
    key: "thuocTram",
  },
  {
    title: "Là quản lý trạm",
    dataIndex: "QLtram",
    key: "QLtram",
  },
  {
    title: "Dịch vụ đơn hàng",
    dataIndex: "donHang",
    key: "donHang",
  },
  {
    title: "Ngày tạo",
    dataIndex: "day",
    key: "day",
  },

  {
    title: "Trạng thái",
    key: "status",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Thao tác",
    key: "action",
    render: () => (
      <Select
        defaultValue="Thao tác"
        style={{ width: 120 }}
        options={[{ value: "1", label: "Xóa" }]}
      />
    ),
  },
];
const data = [
  {
    stt: "1",
    maNv: "Dc0987be02",
    hoten: "Đỗ Đình Mạnh",
    Sdt: "0971237810",
    loainv: "Tài xế",
    thuocTram: "BD03",
    QLtram: "Không",
    donHang: "Giao hàng tiêu chuẩn",
    day: "31/5/2023 17:03:40",

    tags: ["đã kích hoạt"],
  },
  {
    stt: "1",
    maNv: "Dc0987be02",
    hoten: "Đỗ Đình Mạnh",
    Sdt: "0971237810",
    loainv: "Tài xế",
    thuocTram: "BD03",
    QLtram: "Không",
    donHang: "Giao hàng tiêu chuẩn",
    day: "31/5/2023 17:03:40",

    tags: ["đã kích hoạt"],
  },
];

const { RangePicker } = DatePicker;
const DSNV = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "50px 0",
        }}
      >
        <Button>Quay lại </Button>

        <Button type="primary">Thêm nhân viên</Button>
      </div>
      <Form name="validateOnly" layout="vertical" autoComplete="off">
      

        <Row>
          <Col span={6}>
            <Form.Item
              name="name"
              label="Tên"
              style={{marginRight:"10px"}}
              
              
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="age"
              label="Trạng thái"
              style={{marginRight:"10px"}}

              
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="age"
              label="Loại nhân viên"
              style={{marginRight:"10px"}}

              
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="age"
              style={{marginRight:"10px"}}

              label="Ngày tạo"
              
            >
              <RangePicker />
            </Form.Item>
          </Col>
        </Row>
      
      </Form>

      <Table columns={columns} dataSource={data} />;
    </>
  );
};
export default DSNV;
