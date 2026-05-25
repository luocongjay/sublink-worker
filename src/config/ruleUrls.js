/**
 * Rule Set Base URLs
 * Contains base URLs for different rule set providers
 */

function applyProxy(url, prefix) {
	if (!prefix) return url;
	return url
		.replace(/^https:\/\/raw\.githubusercontent\.com\//, `${prefix}raw.githubusercontent.com/`)
		.replace(/^https:\/\/github\.com\//, `${prefix}github.com/`);
}

let _proxyPrefix = '';

export function setGithubProxyPrefix(prefix) {
	_proxyPrefix = prefix ? prefix.replace(/\/?$/, '/') : '';
}

export const SITE_RULE_SET_BASE_URL = 'https://raw.githubusercontent.com/lyc8503/sing-box-rules/refs/heads/rule-set-geosite/';
export const IP_RULE_SET_BASE_URL = 'https://raw.githubusercontent.com/lyc8503/sing-box-rules/refs/heads/rule-set-geoip/';
export const CLASH_SITE_RULE_SET_BASE_URL = 'https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geosite/';
export const CLASH_IP_RULE_SET_BASE_URL = 'https://github.com/MetaCubeX/meta-rules-dat/raw/refs/heads/meta/geo/geoip/';
export const SURGE_SITE_RULE_SET_BASEURL = 'https://github.com/NSZA156/surge-geox-rules/raw/refs/heads/release/geo/geosite/';
export const SURGE_IP_RULE_SET_BASEURL = 'https://github.com/NSZA156/surge-geox-rules/raw/refs/heads/release/geo/geoip/';

export function applyGithubProxy(url) {
	return applyProxy(url, _proxyPrefix);
}
