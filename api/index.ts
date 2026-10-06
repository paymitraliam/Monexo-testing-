import app from '../server';

export default async function handler(req: any, res: any) {
  const forwardedUri = req.headers['x-forwarded-uri'] || req.headers['x-rewrite-url'] || req.headers['x-original-url'];
  if (forwardedUri && typeof forwardedUri === 'string' && forwardedUri.startsWith('/')) {
    req.url = forwardedUri;
  }
  return app(req, res);
}
