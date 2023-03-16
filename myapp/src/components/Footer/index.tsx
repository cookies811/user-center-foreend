import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'cookies个人出品',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Github_cookies',
          title: 'Github',
          href: 'https://github.com/cookies811',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/cookies811',
          blankTarget: true,
        },
        {
          key: 'Gitee_cookies',
          title: 'Gitee',
          href: 'https://gitee.com/cookies811',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
