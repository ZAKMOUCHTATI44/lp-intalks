import { withNextVideo } from "next-video/process";
import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {};

const withNextIntl = createNextIntlPlugin();
export default withNextVideo(withNextIntl(nextConfig), { folder: 'y' });