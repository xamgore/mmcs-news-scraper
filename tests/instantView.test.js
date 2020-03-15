import { sendToChat } from '../src'


const urls = [
  'http://mmcs.sfedu.ru/148-news/838',
  'http://mmcs.sfedu.ru/148-news/1609',
  'http://mmcs.sfedu.ru/148-news/1610',
  'http://mmcs.sfedu.ru/148-news/1611',
  'http://mmcs.sfedu.ru/148-news/1612',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1613',
  'http://mmcs.sfedu.ru/148-news/1614',
  'http://mmcs.sfedu.ru/148-news/1615',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1616',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1617',
  'http://mmcs.sfedu.ru/148-news/1618',
  'http://mmcs.sfedu.ru/148-news/1619',
  'http://mmcs.sfedu.ru/148-news/1620',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1621',
  'http://mmcs.sfedu.ru/148-news/1622',
  'http://mmcs.sfedu.ru/148-news/1623',
  'http://mmcs.sfedu.ru/148-news/1624',
  'http://mmcs.sfedu.ru/148-news/1625',
  'http://mmcs.sfedu.ru/25-news/1626',
  'http://mmcs.sfedu.ru/148-news/1627',
  'http://mmcs.sfedu.ru/148-news/1628',
  'http://mmcs.sfedu.ru/148-news/1629',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1630',
  'http://mmcs.sfedu.ru/148-news/1631',
  'http://mmcs.sfedu.ru/148-news/1632',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1633',
  'http://mmcs.sfedu.ru/148-news/1634',
  'http://mmcs.sfedu.ru/148-news/1635',
  'http://mmcs.sfedu.ru/148-news/1636',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1637',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1638',
  'http://mmcs.sfedu.ru/148-news/1639',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1639',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1640',
  'http://mmcs.sfedu.ru/148-news/1642',
  'http://mmcs.sfedu.ru/148-news/1643',
  'http://mmcs.sfedu.ru/148-news/1644',
  'http://mmcs.sfedu.ru/148-news/1645',
  'http://mmcs.sfedu.ru/148-news/1646',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1647',
  'http://mmcs.sfedu.ru/148-news/1641',
  'http://mmcs.sfedu.ru/148-news/1648',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1649',
  'http://mmcs.sfedu.ru/148-news/1650',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1651',
  'http://mmcs.sfedu.ru/148-news/1652',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1653',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1654',
  'http://mmcs.sfedu.ru/148-news/1655',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1656',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1657',
  'http://mmcs.sfedu.ru/148-news/1658',
  'http://mmcs.sfedu.ru/148-news/1660',
  'http://mmcs.sfedu.ru/148-news/1661',
  'http://mmcs.sfedu.ru/148-news/1662',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1663',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1664',
  'http://mmcs.sfedu.ru/148-news/1665',
  'http://mmcs.sfedu.ru/148-news/1666',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1667',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1668',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1669',
  'http://mmcs.sfedu.ru/148-news/1670',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1671',
  'http://mmcs.sfedu.ru/148-news/1672',
  'http://mmcs.sfedu.ru/148-news/1673',
  'http://mmcs.sfedu.ru/148-news/1674',
  'http://mmcs.sfedu.ru/148-news/1675',
  'http://mmcs.sfedu.ru/148-news/1676',
  'http://mmcs.sfedu.ru/148-news/1677',
  'http://mmcs.sfedu.ru/148-news/1678',
  'http://mmcs.sfedu.ru/148-news/1679',
  'http://mmcs.sfedu.ru/148-news/1680',
  'http://mmcs.sfedu.ru/148-news/1681',
  'http://mmcs.sfedu.ru/25-news/1682',
  'http://mmcs.sfedu.ru/148-news/1683',
  'http://mmcs.sfedu.ru/148-news/1684',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1685',
  'http://mmcs.sfedu.ru/148-news/1686',
  'http://mmcs.sfedu.ru/148-news/1687',
  'http://mmcs.sfedu.ru/148-news/1688',
  'http://mmcs.sfedu.ru/148-news/1689',
  'http://mmcs.sfedu.ru/148-news/1690',
  'http://mmcs.sfedu.ru/148-news/1691',
  'http://mmcs.sfedu.ru/148-news/1692',
  'http://mmcs.sfedu.ru/148-news/1693',
  'http://mmcs.sfedu.ru/148-news/1694',
  'http://mmcs.sfedu.ru/science/recordfilm/1695-%D0%B7%D0%B0%D1%81%D0%B5%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D1%83%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE-%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D0%B0-%D0%B8%D0%BC%D0%BC%D0%BA%D0%BD',
  'http://mmcs.sfedu.ru/148-news/1696',
  'http://mmcs.sfedu.ru/148-news/1697',
  'http://mmcs.sfedu.ru/148-news/1698',
  'http://mmcs.sfedu.ru/science/recordfilm/1699-%D0%B2%D1%8B%D0%B1%D0%BE%D1%80%D1%8B-2018',
  'http://mmcs.sfedu.ru/148-news/1700',
  'http://mmcs.sfedu.ru/148-news/1701',
  'http://mmcs.sfedu.ru/148-news/1702',
  'http://mmcs.sfedu.ru/148-news/1703',
  'http://mmcs.sfedu.ru/148-news/1704',
  'http://mmcs.sfedu.ru/148-news/1705',
  'http://mmcs.sfedu.ru/148-news/1706',
  'http://mmcs.sfedu.ru/148-news/1707',
  'http://mmcs.sfedu.ru/science/seminars/1708-%D0%BA%D1%80%D1%83%D0%B6%D0%BE%D0%BA-%D0%BF%D0%BE-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%BC%D1%83-%D0%B0%D0%BD%D0%B0%D0%BB%D0%B8%D0%B7%D1%83',
  'http://mmcs.sfedu.ru/science/1709-otha-2019',
  'http://mmcs.sfedu.ru/148-news/1710',
  'http://mmcs.sfedu.ru/148-news/1711',
  'http://mmcs.sfedu.ru/148-news/1712',
  'http://mmcs.sfedu.ru/148-news/1713',
  'http://mmcs.sfedu.ru/148-news/1714',
  'http://mmcs.sfedu.ru/148-news/1715',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1717',
  'http://mmcs.sfedu.ru/148-news/1718',
  'http://mmcs.sfedu.ru/148-news/1719',
  'http://mmcs.sfedu.ru/148-news/1720',
  'http://mmcs.sfedu.ru/148-news/1722',
  'http://mmcs.sfedu.ru/148-news/1723',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1724',
  'http://mmcs.sfedu.ru/148-news/1725',
  'http://mmcs.sfedu.ru/148-news/1726',
  'http://mmcs.sfedu.ru/148-news/1727',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1728',
  'http://mmcs.sfedu.ru/148-news/1729',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1730',
  'http://mmcs.sfedu.ru/148-news/1731',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1732',
  'http://mmcs.sfedu.ru/148-news/1733',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1734',
  'http://mmcs.sfedu.ru/148-news/1735',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1737',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1738',
  'http://mmcs.sfedu.ru/148-news/1739',
  'http://mmcs.sfedu.ru/148-news/1740',
  'http://mmcs.sfedu.ru/148-news/1741',
  'http://mmcs.sfedu.ru/science/1742-xiv-%D0%B2%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0-%D1%81%D0%B5%D0%BC%D0%B8%D0%BD%D0%B0%D1%80-%C2%AB%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B8-%D0%B1%D0%B8%D0%BE%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA%D0%B0-%D0%B2-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D0%BE%D0%BC-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82%D0%B5%C2%BB',
  'http://mmcs.sfedu.ru/148-news/1743',
  'http://mmcs.sfedu.ru/%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/1744-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D1%81%D0%BB%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D0%B8-%D0%B8-%D0%B8%D0%BD%D0%B4%D0%B8%D0%B8',
  'http://mmcs.sfedu.ru/148-news/1745',
  'http://mmcs.sfedu.ru/148-news/1746',
  'http://mmcs.sfedu.ru/148-news/1748',
  'http://mmcs.sfedu.ru/148-news/1749',
  'http://mmcs.sfedu.ru/%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%D0%BD%D0%B0%D1%80%D0%BE%D0%B4%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B/1750-%D1%81%D1%82%D0%B8%D0%BF%D0%B5%D0%BD%D0%B4%D0%B8%D1%8F-%D0%BD%D0%B0-%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-%D1%82%D1%83%D1%80%D1%86%D0%B8%D0%B8',
  'http://mmcs.sfedu.ru/science/1751-xviii-%D0%B2%D1%81%D0%B5%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F-%D0%BA%D0%BE%D0%BD%D1%84%D0%B5%D1%80%D0%B5%D0%BD%D1%86%D0%B8%D1%8F-%D1%88%D0%BA%D0%BE%D0%BB%D0%B0-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D1%8B%D1%85-%D0%B8%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-%D1%81%D0%BE%D0%B2%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B-%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F',
  'http://mmcs.sfedu.ru/148-news/1752',
  'http://mmcs.sfedu.ru/148-news/1753',
  'http://mmcs.sfedu.ru/148-news/1754',
  'http://mmcs.sfedu.ru/148-news/1755',
  'http://mmcs.sfedu.ru/148-news/1756',
  'http://mmcs.sfedu.ru/148-news/1757',
  'http://mmcs.sfedu.ru/148-news/1758',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1759',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1760',
  'http://mmcs.sfedu.ru/148-news/1761',
  'http://mmcs.sfedu.ru/148-news/1762',
  'http://mmcs.sfedu.ru/148-news/1763',
  'http://mmcs.sfedu.ru/science/recordfilm/1764-%D1%83%D1%87%D0%B5%D0%BD%D1%8B%D0%B9-%D1%81%D0%BE%D0%B2%D0%B5%D1%82-%E2%84%96вЂ“1',
  'http://mmcs.sfedu.ru/148-news/1766',
  'http://mmcs.sfedu.ru/148-news/1767',
  'http://mmcs.sfedu.ru/148-news/1768',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1769',
  'http://mmcs.sfedu.ru/science/seminars/1770-%D1%84%D0%B0%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%D0%B2-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-%D0%B3%D0%B5%D0%B9%D0%BC-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%D0%B0',
  'http://mmcs.sfedu.ru/science/seminars/1771-%D1%84%D0%B0%D0%BA%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B8%D0%B2-%D0%BF%D0%BE-java',
  'http://mmcs.sfedu.ru/148-news/1772',
  'http://mmcs.sfedu.ru/148-news/1773',
  'http://mmcs.sfedu.ru/148-news/1774',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1776',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1777',
  'http://mmcs.sfedu.ru/148-news/1778',
  'http://mmcs.sfedu.ru/148-news/1779',
  'http://mmcs.sfedu.ru/148-news/1938',
  'http://mmcs.sfedu.ru/173-news/newszerocourse/1937',
  'http://mmcs.sfedu.ru/147-news/sunmathevents/1939',
  'http://mmcs.sfedu.ru/148-news/1940',
  'http://mmcs.sfedu.ru/148-news/1941',
  'http://mmcs.sfedu.ru/148-news/1942',
  'http://mmcs.sfedu.ru/148-news/1943',
  'http://mmcs.sfedu.ru/148-news/1944',
]

describe('Check each sent post has instant view', () => {
  test.each(urls)(
    '%#. %s',
    url => {
      sendToChat([{ title: "check instant view", link: url }])
    }
  )
})
