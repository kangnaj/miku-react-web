import React from "react";
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';

interface IProps {
  title?: string;
}

export const UseRouter: React.FC<IProps> = () => {
  const history = useHistory();
  console.log(useHistory(), "useHistory");
  console.log(useLocation(), "useLocation");
  //useParams存储动态路由参数的地方,此时没有使用动态路由，也没有路由传参，无任何输出
  console.log(useParams(), "useParams");
  console.log(useRouteMatch(), "useRouteMatch");
  const handleGo = (path: string) => {
    history.push(path);
  };
  return (
    <>
      <div>
        <Button type="primary" onClick={() => {handleGo("/home")}} icon={<RightCircleOutlined />}>
          跳转首页
        </Button>
      </div>
    </>
  );
};

export default UseRouter;
